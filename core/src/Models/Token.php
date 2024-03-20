<?php

namespace MMX\Forms\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $token
 * @property int $form_id
 * @property Carbon $created_at
 *
 * @property-read Form $Form;
 */
class Token extends Model
{
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
    protected $primaryKey = 'token';
    protected $table = 'mmx_forms_tokens';
    protected $guarded = [];
    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function Form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

}