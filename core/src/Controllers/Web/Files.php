<?php

namespace MMX\Forms\Controllers\Web;

use MMX\Forms\Models\File;
use MMX\Forms\Models\Form;
use MMX\Forms\Models\Token;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Ramsey\Uuid\Uuid;
use Vesp\Controllers\Controller;

class Files extends Controller
{
    /** @var ServerRequestInterface $request */
    protected RequestInterface $request;
    private ?Form $form = null;

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
        $this->form = $token->Form;

        return null;
    }

    public function post(): ResponseInterface
    {
        if (!$uploadedFile = current($this->request->getUploadedFiles())) {
            return $this->failure('Could not load file');
        }
        $file = new File();
        $file->uuid = Uuid::uuid4();
        $file->form_id = $this->form->id;
        $file->temporary = true;
        $file->uploadFile($uploadedFile);

        return $this->success([
            'tmp' => $file->uuid,
            'originalName' => $file->title,
        ]);
    }

    public function delete(): ResponseInterface
    {
        $key = [
            'form_id' => $this->form->id,
            'uuid' => $this->getProperty('uuid'),
            'temporary' => true,
        ];
        if ($file = File::query()->where($key)->first()) {
            $file->delete();

            return $this->success();
        }

        return $this->failure('Not Found', 404);
    }
}