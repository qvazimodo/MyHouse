<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Meter;
use Illuminate\Database\Seeder;

class MeterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clients = Client::all();
        $clients->each(function ($client) {
            $meters = Meter::factory(rand(1, 3))->make(['client_id' => $client->get('id')]);
            $client->meters()->saveMany($meters);
        });
    }
}
