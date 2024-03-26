<?php

namespace MMX\Forms\Services;

use MMX\Forms\App;

class Filesystem extends \Vesp\Services\Filesystem
{
    public static function getCache(): string
    {
        return MODX_CORE_PATH . 'cache/' . App::NAMESPACE . '/';
    }

    protected function getRoot(): string
    {
        return MODX_ASSETS_PATH . 'upload/' . App::NAMESPACE . '/';
    }
}