<?php

namespace MMX\Forms\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Ramsey\Uuid\Uuid;

/**
 * @property int $id
 * @property string $title
 * @property string $schema
 * @property bool $email
 * @property bool $active
 * @property array $emails
 * @property array $action
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Token[] $Tokens
 * @property-read Submission[] $Submissions
 * @property-read Email[] $Emails
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

    public function getFormKey(): string
    {
        return $this->Tokens()->create(['token' => Uuid::uuid4()])->token;
    }

    public function validateForm(array $values): ?string
    {
        return null;
    }
}