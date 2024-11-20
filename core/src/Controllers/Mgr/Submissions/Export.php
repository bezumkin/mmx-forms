<?php

namespace MMX\Forms\Controllers\Mgr\Submissions;

use MMX\Forms\Controllers\Mgr\Submissions;
use MMX\Forms\Controllers\Traits\ExportControllerTrait;
use MMX\Forms\Models\Form;
use MMX\Forms\Models\Submission;
use Psr\Http\Message\ResponseInterface;
use Throwable;

class Export extends Submissions
{
    use ExportControllerTrait;

    protected $filename = 'submissions';
    protected $titles = [
        'id' => 'Id',
        'form.title' => 'Form',
        'values' => 'Values',
        'submitted_at' => 'Submitted At',
    ];

    public function get(): ResponseInterface
    {
        $formId = $this->getProperty('form_id');
        /** @var Form $form */
        if (!$formId || !$form = Form::query()->find($formId)) {
            return $this->failure('Not Found', 404);
        }

        $c = $form->submissions()->getQuery();
        $c = $this->beforeCount($c);
        // $c = $this->afterCount($c);
        $c = $this->addSorting($c);
        $c->limit($this->getProperty('limit', 100000));

        $columns = [];
        /** @var Submission $submission */
        foreach ($c->cursor() as $submission) {
            $keys = array_keys($submission->values);
            if (empty($columns)) {
                $columns = $keys;
            } elseif (count($columns) !== count($keys)) {
                $columns = array_unique(array_merge($columns, $keys));
            }
            $values[$submission->id] = $submission;
        }
        array_unshift($columns, 'id');
        $columns[] = 'submitted_at';
        $this->titles = array_combine($columns, array_map(static function ($v) {
            return implode(' ', array_map('ucfirst', explode('_', $v)));
        }, $columns));
        $this->filename .= '-' . $form->id;

        try {
            $this->write($this->titles);
            foreach ($values as $record) {
                $this->write($this->prepareRow($record));
            }
            if (method_exists($this, 'getTotals') && $totals = $this->getTotals()) {
                $this->write($totals);
            }
            if ($this->writer) {
                $this->writer->close();
            }
        } catch (Throwable $e) {
            echo $e->getMessage();
        }
        exit();
    }

    public function prepareRow($object): array
    {
        /** @var Submission $object */
        $parent = parent::prepareRow($object);

        $array = [];
        foreach ($this->titles as $key => $title) {
            $value = $parent['values'][$key] ?? self::getValue($object, $key);
            if ($key === 'submitted_at') {
                $value = date('d.m.Y H:i:s', strtotime($value));
            }
            $array[$key] = $value;
        }

        return $array;
    }
}