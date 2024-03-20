<?php

namespace MMX\Forms\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use MMX\Forms\Models\Submission;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\ModelController;

class Submissions extends ModelController
{
    protected string $model = Submission::class;

    protected function beforeGet(Builder $c): Builder
    {
        $c->with('Form:id,title,schema');

        return parent::beforeGet($c);
    }

    protected function beforeCount(Builder $c): Builder
    {
        if ($query = trim($this->getProperty('query', ''))) {
            $c->where('values', 'LIKE', "%$query%");
            $c->orWhereHas('Form', static function (Builder $c) use ($query) {
                $c->where('title', 'LIKE', "%$query%");
            });
        }

        return $c;
    }

    protected function afterCount(Builder $c): Builder
    {
        $c->with('Form:id,title');
        $c->withCount('Emails');

        return $c;
    }

    public function post(): ResponseInterface
    {
        $id = $this->getProperty('id');
        /** @var Submission $submission */
        if (!$id || !$submission = Submission::query()->find($id)) {
            return $this->failure('Not Found', 404);
        }

        $submission->Emails()->whereNull('sent')->orWhere('sent', false)->delete();
        $submission->createEmails();

        return $this->success();
    }
}