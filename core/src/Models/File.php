<?php

namespace MMX\Forms\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use MMX\Forms\Services\Filesystem;
use Ramsey\Uuid\Uuid;
use Vesp\Models\Traits\FileModel;

/**
 * @property string $uuid
 * @property int $form_id
 * @property int $submission_id
 * @property bool $temporary
 *
 * @property-read Form $Form
 * @property-read Submission $Submission
 */
class File extends Model
{
    use FileModel;

    protected $table = 'mmx_forms_files';
    protected $guarded = ['created_at', 'updated_at'];
    protected $casts = [
        'temporary' => 'bool',
        'metadata' => 'array',
    ];

    protected static function booted(): void
    {
        static::creating(static function (self $model) {
            if (!$model->uuid) {
                $model->uuid = Uuid::uuid4();
            }
        });
    }

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->filesystem = new Filesystem();
    }

    public function Form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function Submission(): BelongsTo
    {
        return $this->belongsTo(Submission::class);
    }

    protected function getSaveName(?string $filename = null, ?string $mime = null): string
    {
        return $this->uuid ?: Uuid::uuid4();
    }

    protected function getSavePath(string $filename, ?string $mime = null): string
    {
        return $filename[0];
    }
}