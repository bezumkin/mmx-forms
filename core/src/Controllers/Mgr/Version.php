<?php

namespace MMX\Forms\Controllers\Mgr;

use GuzzleHttp\Client;
use MMX\Forms\App;
use Psr\Http\Message\ResponseInterface;
use Vesp\Controllers\Controller;

class Version extends Controller
{
    public function get(): ResponseInterface
    {
        $name = preg_replace('#-#', '/', App::NAMESPACE, 1);
        $packagist = 'https://repo.packagist.org/p2/' . $name . '.json';
        $composer = MODX_CORE_PATH . 'vendor/' . $name . '/composer.json';

        $results = [
            'current' => '',
            'available' => '',
        ];
        if (file_exists($composer) && $data = json_decode(file_get_contents($composer), true)) {
            $results['current'] = $data['version'];

            try {
                $client = new Client();
                $response = $client->request('GET', $packagist, ['timeout' => 5]);
                if ($response->getStatusCode() === 200 && $data = json_decode($response->getBody(), true)) {
                    foreach ($data['packages'][$name] as $item) {
                        if (version_compare($results['current'], $item['version'], '<')) {
                            $results['available'] = $item['version'];
                            break;
                        }
                    }
                }
            } catch (\Throwable $e) {
            }
        }

        return $this->success($results);
    }
}