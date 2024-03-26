<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class Files extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->create(
            'mmx_forms_files',
            static function (Blueprint $table) {
                $table->id();
                $table->uuid()->unique();
                $table->foreignId('form_id')
                    ->constrained('mmx_forms_forms')->cascadeOnDelete();
                $table->foreignId('submission_id')->nullable()
                    ->constrained('mmx_forms_submissions')->nullOnDelete();
                $table->string('file');
                $table->string('path');
                $table->string('title')->nullable();
                $table->string('type')->nullable();
                $table->unsignedSmallInteger('width')->nullable();
                $table->unsignedSmallInteger('height')->nullable();
                $table->unsignedBigInteger('size')->nullable();
                $table->json('metadata')->nullable();
                $table->boolean('temporary')->nullable()->index();
                $table->timestamps();
            }
        );

        $schema->table('mmx_forms_emails', static function (Blueprint $table) {
            $table->boolean('skip_files')->default(false)->after('body');
        });
    }

    public function down(): void
    {
        $schema = Manager::schema();

        $schema->table('mmx_forms_emails', static function (Blueprint $table) {
            $table->dropColumn('skip_files');
        });
        $schema->drop('mmx_forms_files');
    }
}
