<?php

namespace MMX\Forms\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use InlineStyle\InlineStyle;
use MMX\Forms\App;
use MODX\Revolution\Mail\modMail;
use MODX\Revolution\Mail\modPHPMailer;

/**
 * @property int $id
 * @property int $form_id
 * @property int $submission_id
 * @property string $to
 * @property string $subject
 * @property string $body
 * @property bool $sent
 * @property Carbon $sent_at
 * @property string $error
 *
 * @property-read Form $Form
 * @property-read Submission $Submission
 */
class Email extends Model
{
    public $timestamps = false;
    protected $table = 'mmx_forms_emails';
    protected $guarded = ['id'];
    protected $casts = [
        'sent' => 'bool',
        'sent_at' => 'datetime',
    ];
    protected array $debug = [];

    public function Form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function Submission(): BelongsTo
    {
        return $this->belongsTo(Submission::class);
    }

    public function send(): ?string
    {
        $modx = App::getContainer()->get('modx');
        $service = new modPHPMailer($modx);
        $service->setHTML(true);
        $service->address('to', $this->to);
        $service->set(modMail::MAIL_SUBJECT, $this->subject);
        $service->set(modMail::MAIL_FROM, $modx->getOption('emailsender'));

        $this->debug = [];
        if ($this->body) {
            try {
                $body = mb_convert_encoding($this->body, 'HTML-ENTITIES', 'UTF-8');
                $html = new InlineStyle($body);
                /** @noinspection PhpParamsInspection */
                $html->applyStylesheet($html->extractStylesheets());
                $service->set(modMail::MAIL_BODY, $html->getHTML());
            } catch (\Throwable $e) {
                $this->debug[] = $e->getMessage();
            }
        }

        $service->mailer->SMTPDebug = 2;
        $service->mailer->Debugoutput = function ($str) {
            $this->debug[] = $str;
        };

        if ($this->sent = $service->mailer->send()) {
            $this->sent_at = time();
        } elseif ($this->debug) {
            $this->error = implode(PHP_EOL, $this->debug);
        } else {
            $this->error = $service->mailer->ErrorInfo;
        }
        $this->save();

        return !$this->sent ? $service->mailer->ErrorInfo : null;
    }
}