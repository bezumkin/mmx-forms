<?php

namespace MMX\Forms\Console\Command;

use MMX\Database\Models\Menu;
use MMX\Database\Models\Namespaces;
use MMX\Database\Models\Plugin;
use MMX\Database\Models\Snippet;
use MMX\Database\Models\SystemSetting;
use MMX\Forms\App;
use MODX\Revolution\modX;
use Phinx\Console\PhinxApplication;
use Phinx\Wrapper\TextWrapper;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Install extends Command
{
    protected static $defaultName = 'install';
    protected static $defaultDescription = 'Install mmxForms for MODX 3';
    protected modX $modx;

    public function __construct(modX $modx, ?string $name = null)
    {
        parent::__construct($name);
        $this->modx = $modx;
    }

    public function run(InputInterface $input, OutputInterface $output): void
    {
        $srcPath = MODX_CORE_PATH . 'vendor/' . str_replace('-', '/', App::NAMESPACE);
        $corePath = MODX_CORE_PATH . 'components/' . App::NAMESPACE;
        $assetsPath = MODX_ASSETS_PATH . 'components/' . App::NAMESPACE;

        if (!is_dir($corePath)) {
            symlink($srcPath . '/core', $corePath);
            $output->writeln('<info>Created symlink for "core"</info>');
        }
        if (!is_dir($assetsPath)) {
            symlink($srcPath . '/assets/dist', $assetsPath);
            $output->writeln('<info>Created symlink for "assets"</info>');
        }

        if (!Namespaces::query()->find(App::NAMESPACE)) {
            $namespace = new Namespaces();
            $namespace->name = App::NAMESPACE;
            $namespace->path = '{core_path}components/' . App::NAMESPACE . '/';
            $namespace->assets_path = '{assets_path}components/' . App::NAMESPACE . '/';
            $namespace->save();
            $output->writeln('<info>Created namespace "' . $namespace->name . '"</info>');
        }

        if (!Menu::query()->where(['namespace' => App::NAMESPACE, 'action' => 'home'])->count()) {
            $menu = new Menu();
            $menu->namespace = App::NAMESPACE;
            $menu->action = 'home';
            $menu->parent = 'components';
            $menu->description = App::NAMESPACE . '.menu_desc';
            $menu->icon = '<i class="icon-wpforms icon icon-large"></i>';
            $menu->text = App::NAME;
            $menu->menuindex = Menu::query()->where('parent', 'components')->count();
            $menu->save();
            $output->writeln('<info>Created menu "' . $menu->text . '"</info>');
        }

        if (!SystemSetting::query()->find(App::NAMESPACE . '.email-on-submit')) {
            $setting = new SystemSetting();
            $setting->key = App::NAMESPACE . '.email-on-submit';
            $setting->xtype = 'combo-boolean';
            $setting->value = true;
            $setting->namespace = App::NAMESPACE;
            $setting->save();
            $output->writeln('<info>Created system setting "' . $setting->key . '"</info>');
        }

        /** @var Plugin $plugin */
        if (!$plugin = Plugin::query()->where('name', App::NAME)->first()) {
            $plugin = new Plugin();
            $plugin->name = App::NAME;
            $plugin->plugincode = preg_replace('#^<\?php#', '', file_get_contents($corePath . '/elements/plugin.php'));
            $plugin->save();
            $output->writeln('<info>Created plugin "' . $plugin->name . '"</info>');
        }

        $pluginEvents = [
            'OnHandleRequest',
            'OnSiteRefresh',
            'OnManagerPageInit',
        ];
        foreach ($pluginEvents as $name) {
            if (!$plugin->Events()->where('event', $name)->count()) {
                $plugin->Events()->create(['event' => $name]);
                $output->writeln('<info>Added event "' . $name . '" to plugin "' . $plugin->name . '"</info>');
            }
        }

        $snippet = Snippet::query()->where('name', App::NAME)->first();
        if (!$snippet) {
            $snippet = new Snippet();
            $snippet->name = App::NAME;
            $snippet->snippet = preg_replace('#^<\?php#', '', file_get_contents($corePath . '/elements/snippet.php'));
        }
        if (!$snippet->properties || !isset($snippet->properties['id'])) {
            $snippet->properties = [
                'id' => [
                    'name' => 'id',
                    'desc' => 'mmx-forms.snippets.forms.id',
                    'type' => 'text',
                    'value' => '',
                    'lexicon' => 'mmx-forms:default',
                ],
                'noCSS' => [
                    'name' => 'noCSS',
                    'desc' => 'mmx-forms.snippets.forms.no_css',
                    'type' => 'combo-boolean',
                    'value' => false,
                    'lexicon' => 'mmx-forms:default',
                ],
            ];
            $snippet->save();
            $action = !$snippet->exists() ? 'Created' : 'Updated';
            $output->writeln('<info>' . $action . ' snippet "' . $snippet->name . '"</info>');
        }

        $output->writeln('<info>Run Phinx migrations</info>');
        $phinx = new TextWrapper(new PhinxApplication(), ['configuration' => $srcPath . '/core/phinx.php']);
        if ($res = $phinx->getMigrate('local')) {
            $output->writeln(explode(PHP_EOL, $res));
        }

        $this->modx->getCacheManager()->refresh();
        $output->writeln('<info>Cleared MODX cache</info>');
    }
}
