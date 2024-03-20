<?php
/** @var \MODX\Revolution\modX $modx */
if ($modx->services->has('mmxForms')) {
    $modx->services->get('mmxForms')?->handleEvent($modx->event);
}