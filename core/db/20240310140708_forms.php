<?php

declare(strict_types=1);

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;
use Phinx\Migration\AbstractMigration;

final class Forms extends AbstractMigration
{
    public function up(): void
    {
        $schema = Manager::schema();
        $schema->create(
            'mmx_forms_forms',
            static function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->text('schema')->nullable();
                $table->boolean('email')->default(false);
                $table->boolean('active')->default(true)->index();
                $table->json('emails')->nullable();
                $table->json('action')->nullable();
                $table->timestamps();
            }
        );

        $schema->create(
            'mmx_forms_tokens',
            static function (Blueprint $table) {
                $table->uuid('token')->primary();
                $table->foreignId('form_id')
                    ->constrained('mmx_forms_forms')->cascadeOnDelete();
                $table->timestamp('created_at')->useCurrent()->index();
            }
        );

        $schema->create(
            'mmx_forms_submissions',
            static function (Blueprint $table) {
                $table->id();
                $table->foreignId('form_id')
                    ->constrained('mmx_forms_forms')->cascadeOnDelete();
                $table->json('values')->nullable();
                $table->timestamp('submitted_at')->useCurrent()->index();
            }
        );

        $schema->create(
            'mmx_forms_emails',
            static function (Blueprint $table) {
                $table->id();
                $table->foreignId('form_id')
                    ->constrained('mmx_forms_forms')->cascadeOnDelete();
                $table->foreignId('submission_id')->nullable()
                    ->constrained('mmx_forms_submissions')->nullOnDelete();
                $table->string('to');
                $table->string('subject');
                $table->text('body');
                $table->boolean('sent')->nullable()->index();
                $table->timestamp('sent_at')->nullable();
                $table->text('error')->nullable();
            }
        );
    }

    public function down(): void
    {
        $schema = Manager::schema();
        $schema->drop('mmx_forms_emails');
        $schema->drop('mmx_forms_submissions');
        $schema->drop('mmx_forms_tokens');
        $schema->drop('mmx_forms_forms');
    }
}
