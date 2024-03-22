<?php

namespace MMX\Forms\Controllers\Web;

use Illuminate\Database\Capsule\Manager;
use MMX\Database\Models\Snippet;
use MODX\Revolution\modX;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\Controller;

class Custom extends Controller
{
    protected modX $modx;

    public function __construct(Manager $eloquent, modX $modx)
    {
        parent::__construct($eloquent);
        $this->modx = $modx;
    }

    public function get(): ResponseInterface
    {
        $tmp = explode('-', $this->getProperty('snippet'));
        $tmp = array_map('ucfirst', $tmp);
        $name = 'mmxFormsCustom' . implode('', $tmp);
        if (Snippet::query()->where('name', $name)->count()) {
            $response = $this->modx->runSnippet($name);

            return $this->success($response);
        }

        return $this->failure('Could not load the "' . $name . '" snippet', 404);
    }
}