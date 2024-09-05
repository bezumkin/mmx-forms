<?php

namespace MMX\Forms\Controllers\Mgr;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
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
        if ($date = $this->getProperty('date')) {
            $c->whereBetween('submitted_at', [$date[0] . ' 00:00:00', $date[1] . ' 23:59:59']);
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

    public function prepareRow(Model $object): array
    {
        $array = $object->toArray();
        if ($this->getPrimaryKey()) {
            $array['values'] = array_map(static function ($value) {
                if (is_array($value)) {
                    if (!empty($value['tmp'])) {
                        return $value['tmp'];
                    }
                    if (!empty(current($value)['tmp'])) {
                        return array_map(static function ($subvalue) {
                            return $subvalue['tmp'];
                        }, $value);
                    }

                    return $value;
                }

                return $value;
            }, $array['values']);
        }

        return $array;
    }

    protected function beforeDelete(Model $record): ?ResponseInterface
    {
        /** @var Submission $record */
        foreach ($record->Files as $file) {
            $file->delete();
        }

        return null;
    }
}