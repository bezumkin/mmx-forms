<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class SubmissionContext extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->table(
            'mmx_forms_submissions',
            static function (Blueprint $table) {
                $table->string('context_key', 100)->nullable()->after('form_id');
            }
        );
    }

    public function down(): void
    {
        $schema = Manager::schema();
        $schema->table(
            'mmx_forms_submissions',
            static function (Blueprint $table) {
                $table->dropColumn('context_key');
            }
        );
    }
}
