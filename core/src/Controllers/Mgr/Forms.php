<?php

namespace MMX\Forms\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use MMX\Forms\Models\Form;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelController;

class Forms extends ModelController
{
    protected string $model = Form::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('title', 'LIKE', "%$query%");
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        $c->withCount('Submissions');
        $c->withCount('Emails');

        return $c;
    }

    protected function beforeSave(Model $record): ?ResponseInterface
    {
        /** @var Form $record */
        if (!$record->emails) {
            $record->email = false;
        }

        return null;
    }
}