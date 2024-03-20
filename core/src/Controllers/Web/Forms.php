<?php

namespace MMX\Forms\Controllers\Web;

use Illuminate\Database\Capsule\Manager;
use MMX\Forms\Models\Submission;
use MMX\Forms\Models\Token;
use MODX\Revolution\modX;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\Controller;

class Forms extends Controller
{
    protected modX $modx;

    public function __construct(Manager $eloquent, modX $modx)
    {
        parent::__construct($eloquent);
        $this->modx = $modx;
    }

    protected function getToken(): ?Token
    {
        $uuid = $this->getProperty('uuid');
        /** @var Token $token */
        if ($uuid && $token = Token::query()->find($uuid)) {
            return $token;
        }

        return null;
    }

    public function post(): ResponseInterface
    {
        $token = $this->getToken();
        if (!$token || !$token->Form->active) {
            return $this->failure('Not Found', 404);
        }
        $form = $token->Form;

        $values = $this->getProperties();
        unset($values['uuid']);
        if ($error = $form->validateForm($values)) {
            return $this->failure($error);
        }

        /** @var Submission $submission */
        $submission = $form->Submissions()->create(['values' => $values]);
        if ($form->email) {
            $submission->createEmails((bool)$this->modx->getOption('mmx-forms.email-on-submit'));
        }
        $token->delete();

        if ($action = $form->action) {
            if ($action['type'] === 'redirect' && is_numeric($action['value'])) {
                $action['value'] = $this->modx->makeUrl((int)$action['value'], '', '', 'full');
            }

            return $this->success(['action' => $action]);
        }

        return $this->success(['id' => $form->getFormKey()]);
    }

    /*
    public function get(): ResponseInterface
    {
        $token = $this->getToken();
        if (!$token || !$token->Form->active) {
            return $this->failure('Not Found', 404);
        }

        return $this->success($token->Form->schema);
    } */

}