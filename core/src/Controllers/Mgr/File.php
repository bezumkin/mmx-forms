<?php

namespace MMX\Forms\Controllers\Mgr;

use Carbon\Carbon;
use Psr\Http\Message\ResponseInterface;
use Slim\Psr7\Stream;

class File extends \Vesp\Controllers\Data\Image
{
    protected string $model = \MMX\Forms\Models\File::class;

    protected function getPrimaryKey(): null|string|array
    {
        return ['uuid' => $this->getProperty('uuid')];
    }

    protected function handleFile($file): ?ResponseInterface
    {
        return $this->outputFile($file)
            ->withHeader('Content-Disposition', 'attachment; filename=' . $file->title ?: $file->file);
    }

    protected function outputFile($file): ResponseInterface
    {
        $stream = new Stream($file->getFilesystem()->getBaseFilesystem()->readStream($file->getFilePathAttribute()));

        return $this->response
            ->withBody($stream)
            ->withHeader('Content-Type', $file->type)
            ->withHeader('Content-Length', $file->size)
            ->withHeader('Cache-Control', 'max-age=31536000, public')
            ->withHeader('Expires', Carbon::now()->addYear()->toRfc822String());
    }
}