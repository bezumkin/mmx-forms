<?php

namespace MMX\Forms;

use DI\Bridge\Slim\Bridge;
use DI\Container;
use MMX\Database\Models\Context;
use MMX\Forms\Middlewares\Mgr;
use MMX\Forms\Models\Form;
use MMX\Forms\Services\Filesystem;
use MODX\Revolution\modExtraManagerController;
use MODX\Revolution\modSystemEvent;
use MODX\Revolution\modX;
use Psr\Container\ContainerInterface;
use RecursiveDirectoryIterator;
use Slim\Routing\RouteCollectorProxy;

class App
{
    public const NAME = 'mmxForms';
    public const NAMESPACE = 'mmx-forms';

    protected modX $modx;
    protected static ContainerInterface $container;

    public function __construct(modX $modx)
    {
        $this->modx = $modx;
        if (!$this->modx->services->has('mmxDatabase')) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, 'Please install "mmx/database" package to use mmxForms');
        }

        $container = new Container();
        $container->set(modX::class, $this->modx);
        $container->set('modx', $this->modx);
        static::$container = $container;
    }

    public static function getContainer(): ContainerInterface
    {
        return static::$container;
    }

    public function handleEvent(?modSystemEvent $event): void
    {
        if (!$event) {
            return;
        }

        if ($event->name === 'OnManagerPageInit' && $event->params['namespace'] === $this::NAMESPACE) {
            if ($event->params['action'] === 'home') {
                class_alias(\MMX\Forms\Controllers\Modx\Home::class, '\MODX\Revolution\Controllers\Home');
            }
        }
        if ($event->name === 'OnHandleRequest' && str_starts_with($_SERVER['REQUEST_URI'], '/' . $this::NAMESPACE)) {
            $this->run();
            exit();
        }
        if ($event->name === 'OnSiteRefresh') {
            $this::clearCache(Filesystem::getCache());
            $this->modx->log(modX::LOG_LEVEL_INFO, $this->modx->lexicon('refresh_default') . ': ' . $this::NAME);
        }
    }

    public function handleSnippet(array $properties): string
    {
        $keys = array_map('strtolower', array_keys($properties));
        $properties = array_combine($keys, array_values($properties));

        $id = $properties['id'] ?? 0;
        /** @var Form $form */
        if (!$id || !$form = Form::query()->where('active', true)->find($id)) {
            $this->modx->log(modX::LOG_LEVEL_ERROR, 'Could not load active mmxForm with id = "' . $id . '".');

            return '';
        }

        $this::registerAssets($this->modx, !empty($properties['nocss']));
        $locale = $this->modx->context?->getOption('cultureKey') ?: 'en';
        $data = [
            'locale' => $locale,
            'context' => $this->modx->context->key,
            'lexicon' => $this->getLexicon($locale, ['success', 'errors']),
            'forms' => [],
        ];

        $id = $form->getFormKey();
        $schema = preg_replace('#\n|\r\n|\t#', '', $form->schema);
        $this->modx->regClientHTMLBlock('<script>mmxForms=' . json_encode($data) . '</script>');
        $this->modx->regClientHTMLBlock("<script>mmxForms.forms.push({id:'$id',schema:$schema})</script>");

        return '<div id="mmx-forms-' . $id . '" class="mmx-forms"></div>';
    }

    public function run(): void
    {
        $app = Bridge::create($this::getContainer());
        $app->addBodyParsingMiddleware();
        $app->addRoutingMiddleware();
        $app->setBasePath('/' . $this::NAMESPACE);
        $this::setRoutes($app);

        try {
            $_SERVER['QUERY_STRING'] = html_entity_decode($_SERVER['QUERY_STRING']);
            if (!empty($_GET['context']) && $context = Context::query()->where('key', $_GET['context'])->first()) {
                /** @var Context $context */
                if ($this->modx->context->key !== $context->key) {
                    $this->modx->switchContext($context->key);
                }
            }
            $app->run();
        } catch (\Throwable $e) {
            http_response_code($e->getCode() ?: 500);
            echo json_encode($e->getMessage());
        }
    }

    protected static function setRoutes(\Slim\App $app): void
    {
        $app->group(
            '/mgr',
            static function (RouteCollectorProxy $group) {
                $group->any('/version', Controllers\Mgr\Version::class);
                $group->any('/file/{uuid}', Controllers\Mgr\File::class);
                $group->any('/image/{uuid}', Controllers\Mgr\Image::class);
                $group->any('/forms[/{id:\d+}]', Controllers\Mgr\Forms::class);
                $group->any('/submissions[/{id:\d+}]', Controllers\Mgr\Submissions::class);
                $group->any('/submissions/export', Controllers\Mgr\Submissions\Export::class);
                $group->any('/emails[/{id:\d+}]', Controllers\Mgr\Emails::class);
                $group->any('/elements/chunks[/{id:\d+}]', Controllers\Mgr\Elements\Chunks::class);
                $group->any('/elements/snippets[/{id:\d+}]', Controllers\Mgr\Elements\Snippets::class);
            }
        )->add(Mgr::class);

        $app->group(
            '/web',
            static function (RouteCollectorProxy $group) {
                $group->map(['OPTIONS', 'POST'], '/forms/{token}', Controllers\Web\Forms::class);
                $group->map(['OPTIONS', 'POST', 'DELETE'], '/forms/{token}/files[/{uuid}]', Controllers\Web\Files::class);
                $group->map(['OPTIONS', 'GET'], '/custom/{snippet}', Controllers\Web\Custom::class);
            }
        );
    }

    public static function registerAssets(modX|modExtraManagerController $instance, bool $noCss = false): void
    {
        $context = $instance instanceof modX ? 'web' : 'mgr';
        $assets = self::getAssetsFromManifest($context);
        if ($assets) {
            // Production mode
            $jsMethod = $context === 'mgr' ? 'addHtml' : 'regClientHTMLBlock';
            $cssMethod = $context === 'mgr' ? 'addCss' : 'regClientCss';
            foreach ($assets as $file) {
                if (str_ends_with($file, '.js')) {
                    $instance->$jsMethod('<script type="module" src="' . $file . '"></script>');
                } elseif (!$noCss) {
                    $instance->$cssMethod($file);
                }
            }
        } else {
            // Development mode
            $port = getenv('NODE_DEV_PORT') ?: '9090';
            $connection = @fsockopen('node', $port);
            if (@is_resource($connection)) {
                $server = explode(':', MODX_HTTP_HOST);
                $baseUrl = MODX_ASSETS_URL . 'components/' . self::NAMESPACE . '/';
                $vite = MODX_URL_SCHEME . $server[0] . ':' . $port . $baseUrl;
                if ($instance instanceof modX) {
                    $instance->regClientHTMLBlock('<script type="module" src="' . $vite . '@vite/client"></script>');
                    $instance->regClientHTMLBlock('<script type="module" src="' . $vite . 'src/web.ts"></script>');
                } else {
                    $instance->addHtml('<script type="module" src="' . $vite . '@vite/client"></script>');
                    $instance->addHtml('<script type="module" src="' . $vite . 'src/mgr.ts"></script>');
                }
            }
        }
    }

    protected static function getAssetsFromManifest(string $context): ?array
    {
        $script = 'src/' . $context . '.ts';
        $baseUrl = MODX_ASSETS_URL . 'components/' . self::NAMESPACE . '/';
        $manifest = MODX_ASSETS_PATH . 'components/' . self::NAMESPACE . '/manifest.json';

        if (file_exists($manifest) && $files = json_decode(file_get_contents($manifest), true)) {
            $assets = [];
            if (!empty($files[$script])) {
                $file = $files[$script];
                $assets[] = $baseUrl . $file['file'];
                foreach ($file['css'] as $css) {
                    $assets[] = $baseUrl . $css;
                }
                foreach ($files as $key => $value) {
                    if (!empty($value['css']) && str_contains($key, 'common')) {
                        foreach ($value['css'] as $css) {
                            $assets[] = $baseUrl . $css;
                        }
                    }
                }

                return $assets;
            }
        }

        return null;
    }

    public static function prepareLexicon(array $arr, string $prefix = ''): array
    {
        $out = [];
        foreach ($arr as $k => $v) {
            $key = !$prefix ? $k : "{$prefix}.{$k}";
            if (is_array($v)) {
                $out += self::prepareLexicon($v, $key);
            } else {
                $out[$key] = $v;
            }
        }

        return $out;
    }

    public function getLexicon(string $locale = 'en', array|string $prefixes = []): array
    {
        $namespace = $this::NAMESPACE;
        $this->modx->lexicon->load($locale . ':' . $namespace . ':default');
        $entries = [];

        if ($prefixes) {
            if (!is_array($prefixes)) {
                $prefixes = [$prefixes];
            }
            foreach ($prefixes as $prefix) {
                $entries += $this->modx->lexicon->fetch($namespace . '.' . $prefix);
            }
        } else {
            $entries = $this->modx->lexicon->fetch($namespace);
        }

        $keys = array_map(static function ($key) use ($namespace) {
            return str_replace($namespace . '.', '', $key);
        }, array_keys($entries));

        return array_combine($keys, array_values($entries));
    }

    protected static function clearCache(string $dir): void
    {
        if (!file_exists($dir)) {
            return;
        }
        $files = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
        foreach ($files as $file) {
            if ($file->isDir()) {
                self::clearCache($file->getPathname());
            } elseif ($file->isFile()) {
                @unlink($file->getPathname());
            }
        }
        @rmdir($dir);
    }
}