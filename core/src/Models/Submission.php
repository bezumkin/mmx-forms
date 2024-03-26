<?php

namespace MMX\Forms\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use MMX\Database\Models\Chunk;
use MMX\Forms\App;

/**
 * @property int $id
 * @property int $form_id
 * @property array $values
 * @property Carbon $submitted_at
 *
 * @property-read Form $Form
 * @property-read Email[] $Emails
 * @property-read File[] $Files
 */
class Submission extends Model
{
    public $timestamps = false;
    protected $table = 'mmx_forms_submissions';
    protected $guarded = ['id'];
    protected $casts = [
        'values' => 'array',
        'submitted_at' => 'datetime',
    ];

    public function Form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function Emails(): HasMany
    {
        return $this->hasMany(Email::class);
    }

    public function Files(): HasMany
    {
        return $this->hasMany(File::class);
    }

    public function createEmails(bool $send = false): void
    {
        if (!$this->Form->emails) {
            return;
        }

        $pls = $this->getPlaceholders();
        foreach ($this->Form->emails as $data) {
            $email = new Email();
            $email->form_id = $this->Form->id;
            $email->submission_id = $this->id;
            $email->to = $this->usePlaceholders($data['to'], $pls);
            $email->subject = $this->usePlaceholders($data['subject'], $pls);
            $email->body = $this->prepareBody((int)$data['chunk']);
            $email->sent = null;
            $email->skip_files = !empty($data['skip_files']);

            $email->save();

            if ($send) {
                $email->send();
            }
        }
    }

    protected function prepareBody(int $id): string
    {
        /** @var Chunk $chunk */
        if (!$chunk = Chunk::query()->find($id)) {
            return print_r($this->values, true);
        }

        $modx = App::getContainer()->get('modx');
        $html = $modx->services->has('pdoTools')
            ? $modx->services->get('pdoTools')->getChunk($chunk->name, $this->values)
            : $modx->getChunk($chunk->name, $this->values);

        return preg_replace('#\[\[.*?]]#', '', $html);
    }

    protected function getPlaceholders(): array
    {
        $keys = array_map(static function ($key) {
            return '[[+' . $key . ']]';
        }, array_keys($this->values));

        return ['keys' => $keys, 'values' => array_values($this->values)];
    }

    protected function usePlaceholders(string $value, array $pls): string
    {
        $result = str_replace($pls['keys'], $pls['values'], $value);

        return preg_replace('#\[\[.*?]]#', '', $result);
    }
}