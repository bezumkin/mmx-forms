<?php

use MMX\Forms\App;

class MmxFormsHomeManagerController extends \MODX\Revolution\modExtraManagerController
{
    public function loadCustomCssJs(): void
    {
        App::registerAssets($this);
    }

    public function getPageTitle(): string
    {
        return App::NAME;
    }

    public function getLanguageTopics(): array
    {
        return [App::NAMESPACE . ':default'];
    }

    public function getTemplateFile(): string
    {
        $locale = $this->modx->getOption('manager_language', $_SESSION, $this->modx->getOption('cultureKey'));
        $data = [
            'locale' => $locale ?: 'en',
            'lexicon' => $this->getLexicon(),
        ];

        $this->content .= '<div id="' . App::NAMESPACE . '-root" class="mmx-app"></div>';
        $this->content .= '<script>mmxForms=' . json_encode($data) . '</script>';

        return '';
    }

    protected function getLexicon(): array
    {
        $namespace = App::NAMESPACE;
        $entries = $this->modx->lexicon->fetch($namespace);
        $keys = array_map(static function ($key) use ($namespace) {
            return str_replace($namespace . '.', '', $key);
        }, array_keys($entries));

        return array_combine($keys, array_values($entries));
    }
}