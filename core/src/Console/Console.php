<?php

namespace MMX\Forms\Console;

use MMX\Forms\App;
use MMX\Forms\Console\Command\Emails;
use MMX\Forms\Console\Command\Install;
use MMX\Forms\Console\Command\Remove;
use MODX\Revolution\modX;
use Symfony\Component\Console\Application;
use Symfony\Component\Console\Command\ListCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Console extends Application
{
    protected modX $modx;
    protected App $app;

    public function __construct(modX $modx)
    {
        parent::__construct(App::NAME);
        $this->modx = $modx;
        $this->app = new App($modx);
    }

    public function doRun(InputInterface $input, OutputInterface $output)
    {
        if (!$this->modx->services->has('mmxDatabase')) {
            $output->writeln('<error>Could not load mmxDatabase service</error>');
            $output->writeln('<info>Please run "composer exec mmx-database install"</info>');
            exit;
        }

        return parent::doRun($input, $output);
    }

    protected function getDefaultCommands(): array
    {
        return [
            new ListCommand(),
            new Install($this->modx),
            new Remove($this->modx),
            new Emails(),
        ];
    }
}
