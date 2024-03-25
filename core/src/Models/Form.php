<?php

namespace MMX\Forms\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use MMX\Database\Models\Snippet;
use Ramsey\Uuid\Uuid;

/**
 * @property int $id
 * @property string $title
 * @property string $schema
 * @property bool $email
 * @property bool $active
 * @property array $emails
 * @property array $action
 * @property int $prepare_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Token[] $Tokens
 * @property-read Submission[] $Submissions
 * @property-read Email[] $Emails
 * @property-read Snippet $PrepareSnippet
 */
class Form extends Model
{
    protected $table = 'mmx_forms_forms';
    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $casts = [
        'email' => 'bool',
        'active' => 'bool',
        'emails' => 'array',
        'action' => 'array',
    ];

    public function Tokens(): HasMany
    {
        return $this->hasMany(Token::class);
    }

    public function Submissions(): HasMany
    {
        return $this->hasMany(Submission::class);
    }

    public function Emails(): HasMany
    {
        return $this->hasMany(Email::class);
    }

    public function PrepareSnippet(): BelongsTo
    {
        return $this->belongsTo(Snippet::class, 'prepare_id');
    }

    public function getFormKey(): string
    {
        Token::query()->where('created_at', '<', Carbon::now()->subHours(12))->delete();

        return $this->Tokens()->create(['token' => Uuid::uuid4()])->token;
    }

    public function validateForm(array $values): ?string
    {
        return null;
    }
}