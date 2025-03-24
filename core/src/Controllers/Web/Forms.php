<?php

namespace MMX\Forms\Controllers\Web;

use Illuminate\Database\Capsule\Manager;
use MMX\Database\Models\Snippet;
use MMX\Forms\Models\File;
use MMX\Forms\Models\Form;
use MMX\Forms\Models\Submission;
use MMX\Forms\Models\Token;
use MODX\Revolution\modX;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\Controller;

class Forms extends Controller
{
    protected modX $modx;
    protected ?Token $token = null;
    protected ?Form $form = null;

    public function __construct(Manager $eloquent, modX $modx)
    {
        parent::__construct($eloquent);
        $this->modx = $modx;
    }

    public function checkScope(string $method): ?ResponseInterface
    {
        if ($method === 'options') {
            return null;
        }

        /** @var Token $token */
        $token = Token::query()->find($this->getProperty('token'));
        if (!$token || !$token->Form || !$token->Form->active) {
            return $this->failure('Not Found', 404);
        }
        $this->token = $token;
        $this->form = $token->Form;

        return null;
    }

    public function post(): ResponseInterface
    {
        $form = $this->form;
        $values = $this->getProperties();
        unset($values['token']);
        $files = $this->getFiles($values);

        if ($snippet = $form->PrepareSnippet()->first()) {
            /** @var Snippet $snippet */
            $data = ['form' => $form->toArray(), 'values' => $values];
            if ($result = $this->modx->runSnippet($snippet->name, $data)) {
                if (is_array($result)) {
                    $values = $result;
                } else {
                    return $this->failure($result);
                }
            }
        } elseif ($error = $form->validateForm($values)) {
            return $this->failure($error);
        }

        /** @var Submission $submission */
        $submission = $form->Submissions()->create(['values' => $values, 'context_key' => $this->modx?->context?->key]);
        foreach ($files as $file) {
            /** @var File $file */
            $file->update(['submission_id' => $submission->id, 'temporary' => false]);
        }
        if ($form->email) {
            $submission->createEmails((bool)$this->modx->getOption('mmx-forms.email-on-submit'));
        }
        $this->token->delete();

        if ($action = $form->action) {
            if ($action['type'] === 'snippet' && $snippet = Snippet::query()->find((int)$action['value'])) {
                /** @var Snippet $snippet */
                $data = ['form' => $form->toArray(), 'values' => $submission->values];
                $action = $this->modx->runSnippet($snippet->name, $data);
            }

            if ($action && is_array($action) && in_array($action['type'], ['redirect', 'message'], true)) {
                if ($action['type'] === 'redirect' && is_numeric($action['value'])) {
                    $action['value'] = $this->modx->makeUrl((int)$action['value'], '', '', 'full');
                }

                return $this->success(['action' => $action]);
            }
        }

        return $this->success(['id' => $form->getFormKey(), 'action' => $action]);
    }

    protected function getFiles(array $values): array
    {
        $files = [];
        foreach ($values as $value) {
            if (is_array($value)) {
                if (!empty($value['tmp'])) {
                    $file = $this->form->Files()->where(['uuid' => $value['tmp'], 'temporary' => true])->first();
                    if ($file) {
                        $files[] = $file;
                    }
                } else {
                    foreach ($this->getFiles($value) as $file) {
                        $files[] = $file;
                    }
                }
            }
        }

        return $files;
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