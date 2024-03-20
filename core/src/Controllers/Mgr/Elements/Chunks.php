<?php

namespace MMX\Forms\Controllers\Mgr\Elements;

use Illuminate\Database\Eloquent\Builder;
use MMX\Database\Models\Chunk;
use Vesp\Controllers\ModelGetController;

class Chunks extends ModelGetController
{
    protected string $model = Chunk::class;

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('name', 'LIKE', "%$query%");
            $c->orWhere('description', 'LIKE', "%$query%");
        }

        return $c;
    }
}