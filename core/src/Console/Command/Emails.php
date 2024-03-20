<?php

namespace MMX\Forms\Console\Command;

use MMX\Forms\Models\Email;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Emails extends Command
{
    protected static $defaultName = 'emails';
    protected static $defaultDescription = 'Process unsent mmxForms emails';

    public function run(InputInterface $input, OutputInterface $output): void
    {
        $emails = Email::query()->whereNull('sent');
        /** @var Email $email */
        foreach ($emails->cursor() as $email) {
            if ($error = $email->send()) {
                $output->writeln(
                    '<error>There was an error while sending email to "' . $email->to . '": ' . $error . '</error>'
                );
            } else {
                $output->writeln(
                    '<info>Email to "' . $email->to . '" with subject "' . $email->subject . '" was successfully sent!</info>'
                );
            }
        }
    }
}
