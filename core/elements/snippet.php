<?php
/** @var \MODX\Revolution\modX $modx */
if ($modx->services->has('mmxForms')) {
    /** @var array $scriptProperties */
    return $modx->services->get('mmxForms')?->handleSnippet($scriptProperties);
}