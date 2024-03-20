<?php

/** @var MODX\Revolution\modX $modx */
require __DIR__ . '/bootstrap.php';

/** @var MMX\Database\App $app */
$app = $modx->services->get('mmxDatabase');
$connection = $app->getConnection();
$config = $connection->getConfig();

return [
    'paths' => [
        'migrations' => '%%PHINX_CONFIG_DIR%%/db',
    ],
    'templates' => [
        'style' => 'up_down',
    ],
    'environments' => [
        'default_migration_table' => $config['prefix'] . 'mmx_forms_migrations',
        'default_environment' => 'local',
        'local' => [
            'name' => $config['database'],
            'connection' => $connection->getPdo(),
        ],
    ],
];
