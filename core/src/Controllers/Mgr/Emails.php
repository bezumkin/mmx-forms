<?php

namespace MMX\Forms\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use MMX\Forms\Models\Email;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelController;

class Emails extends ModelController
{
    protected string $model = Email::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('to', 'LIKE', "%$query%");
            $c->orWhere('subject', 'LIKE', "%$query%");
            $c->orWhereHas('Form', static function (Builder $c) use ($query) {
                $c->where('title', 'LIKE', "%$query%");
            });
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        $c->with('Form:id,title');

        return $c;
    }

    public function post(): ResponseInterface
    {
        $id = $this->getProperty('id');
        /** @var Email $email */
        if (!$id || !$email = Email::query()->find($id)) {
            return $this->failure('Not Found', 404);
        }
        if ($err = $email->send()) {
            return $this->failure($err);
        }

        return $this->success();
    }

    public function delete(): ResponseInterface
    {
        if ($this->getPrimaryKey()) {
            return parent::delete();
        }

        Email::query()->whereNull('sent')->orWhere('sent', false)->delete();

        return $this->success();
    }
}