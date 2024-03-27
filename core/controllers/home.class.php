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
        /** @var App $app */
        $app = $this->modx->services->get(App::NAME);
        $locale = $this->modx->getOption('manager_language', $_SESSION, $this->modx->getOption('cultureKey')) ?: 'en';
        $data = [
            'locale' => $locale,
            'lexicon' => $app->getLexicon($locale),
        ];
        $this->content .= '<div id="' . App::NAMESPACE . '-root" class="mmx-app"></div>';
        $this->content .= '<script>mmxForms=' . json_encode($data) . '</script>';

        return '';
    }
}