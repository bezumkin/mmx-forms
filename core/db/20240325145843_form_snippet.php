<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class FormSnippet extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->table(
            'mmx_forms_forms',
            static function (Blueprint $table) {
                $table->unsignedInteger('prepare_id')->nullable()->after('action');
                $table->foreign('prepare_id')
                    ->references('id')->on('site_snippets')->nullOnDelete();
            }
        );
    }

    public function down(): void
    {
        $schema = Manager::schema();
        $schema->table(
            'mmx_forms_forms',
            static function (Blueprint $table) {
                $table->dropForeign(['prepare_id']);
                $table->dropColumn('prepare_id');
            }
        );
    }
}
