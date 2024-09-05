<?php

namespace MMX\Forms\Controllers\Traits;

use Box\Spout\Common\Exception\IOException;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory as Writer;
use Box\Spout\Writer\Exception\WriterNotOpenedException;
use Box\Spout\Writer\WriterAbstract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Psr\Http\Message\ResponseInterface;
use Throwable;

/**
 * @property string $filename
 * @property array $titles
 */
trait ExportControllerTrait
{
    /** @var WriterAbstract | bool */
    protected $writer;

    /**
     * @throws IOException
     */
    protected function getWriter(bool $xls = false): WriterAbstract
    {
        if ($xls) {
            $writer = Writer::createXLSXWriter();
            $writer->openToBrowser($this->filename . '.xlsx');
        } else {
            $writer = Writer::createCSVWriter();
            $writer->setFieldDelimiter(';');
            $writer->openToBrowser($this->filename . '.csv');
        }

        return $writer;
    }

    /**
     * @throws IOException
     * @throws WriterNotOpenedException
     */
    protected function write(array $data): ?string
    {
        $test = $this->getProperty('test');
        if (!$this->writer) {
            if (!$test) {
                $this->writer = $this->getWriter($this->getProperty('mode') === 'xls');
            } elseif ($this->writer !== false) {
                $this->writer = false;
                echo '<table border="1" cellspacing="0" cellpadding="5" style="font:14px Arial normal">';
            }
        }

        if ($this->writer) {
            $this->writer->addRow(Writer::createRowFromArray($data));
        } else {
            echo "<tr>";
            foreach ($data as $col) {
                echo "<td>{$col}</td>";
            }
            echo "</tr>\n";
        }

        return null;
    }

    public function get(): ResponseInterface
    {
        /** @var Builder $c */
        $c = (new $this->model())->newQuery();
        $c = $this->beforeCount($c);
        $c = $this->afterCount($c);
        $c = $this->addSorting($c);
        $c->limit($this->getProperty('limit', 100000));

        try {
            $this->write($this->titles);
            foreach ($c->get() as $item) {
                $this->write($this->prepareRow($item));
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

    protected static function getValue(Model $object, string $key)
    {
        $value = null;

        if (str_contains($key, '.')) {
            $tmp = explode('.', $key);
            $v = $object;
            while ($count = count($tmp)) {
                $k = array_shift($tmp);
                if ($v->$k !== null) {
                    if ($count > 1) {
                        $v = $v->$k;
                    } else {
                        $value = $v->$k;
                    }
                } else {
                    break;
                }
            }
        } else {
            $value = $object->getAttribute($key);
        }

        if (is_bool($value)) {
            $value = $value ? 'Yes' : 'No';
        }

        return $value;
    }

    public function prepareRow($object): array
    {
        $array = [];
        foreach ($this->titles as $key => $title) {
            $array[$key] = self::getValue($object, $key);
        }

        return $array;
    }

    public function post(): ResponseInterface
    {
        return $this->failure(null, 405);
    }

    public function put(): ResponseInterface
    {
        return $this->failure(null, 405);
    }

    public function patch(): ResponseInterface
    {
        return $this->failure(null, 405);
    }

    public function delete(): ResponseInterface
    {
        return $this->failure(null, 405);
    }
}