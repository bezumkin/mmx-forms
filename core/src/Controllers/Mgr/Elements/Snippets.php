<?php

namespace MMX\Forms\Controllers\Mgr\Elements;

use Illuminate\Database\Eloquent\Builder;
use MMX\Database\Models\Snippet;
use Vesp\Controllers\ModelGetController;

class Snippets extends ModelGetController
{
    protected string $model = Snippet::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('name', 'LIKE', "%$query%");
            $c->orWhere('description', 'LIKE', "%$query%");
            $c->orWhereHas('Category', static function (Builder $c) use ($query) {
                $c->where('category', 'LIKE', "%$query%");
            });
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        if ($this->getProperty('combo')) {
            $c->select('id', 'name', 'category');
            $c->with('Category:id,category');
        }

        return $c;
    }
}