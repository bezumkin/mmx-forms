<?php

namespace MMX\Forms\Controllers\Mgr\Submissions;

use MMX\Forms\Controllers\Mgr\Submissions;
use MMX\Forms\Controllers\Traits\ExportControllerTrait;
use MMX\Forms\Models\Submission;

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

    public function prepareRow($object): array
    {
        /** @var Submission $object */
        $parent = parent::prepareRow($object);
        $dates = ['submitted_at'];
        $isTest = $this->getProperty('test');

        $array = [];
        foreach ($this->titles as $key => $title) {
            if ($key === 'values') {
                $value = [];
                foreach ($object->values as $k => $v) {
                    if (!is_scalar($v)) {
                        $v = json_encode($v);
                    }
                    $value[] = "$k = $v";
                }
                $value = implode($isTest ? '<br/>' : ' | ', $value);
            } else {
                $value = $parent[$key] ?? self::getValue($object, $key);
                if (in_array($key, $dates)) {
                    $value = date('d.m.Y H:i:s', strtotime($value));
                }
            }
            $array[$key] = $value;
        }

        return $array;
    }
}