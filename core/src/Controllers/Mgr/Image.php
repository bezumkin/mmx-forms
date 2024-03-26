<?php

namespace MMX\Forms\Controllers\Mgr;

use League\Glide\Responses\PsrResponseFactory;
use League\Glide\ServerFactory;
use MMX\Forms\Services\Filesystem;
use Psr\Http\Message\ResponseInterface;
use Slim\Psr7\Stream;

class Image extends \Vesp\Controllers\Data\Image
{
    protected string $model = \MMX\Forms\Models\File::class;

    protected function getPrimaryKey(): null|string|array
    {
        return ['uuid' => $this->getProperty('uuid')];
    }

    protected function handleFile($file): ?ResponseInterface
    {
        if (!str_starts_with($file->type, 'image/')) {
            return $this->response->withStatus(422);
        }

        $server = ServerFactory::create([
            'base_url' => $this->request->getUri()->getPath(),
            'source' => $file->getFilesystem()->getBaseFilesystem(),
            'cache' => Filesystem::getCache(),
        ]);

        $response = new PsrResponseFactory(
            $this->response,
            static function ($stream) {
                return new Stream($stream);
            }
        );
        $server->setResponseFactory($response);
        $path = implode('/', [$file->path, $file->file]);

        return $server->getImageResponse($path, $this->getProperties());
    }
}