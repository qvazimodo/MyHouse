<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\House;
use App\Models\Meter;
use Illuminate\Database\Seeder;

class MeterSeeder extends Seeder
{
    private array $types = [
        'горячая вода', 'холодная вода', 'электроэнергия', 'тепловая энергия', 'газ'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clients = Client::all();
        $clients->each(function ($client) {
            $clientMeters = [];
            foreach ($this->types as $type) {
                $clientMeter = Meter::factory()->make([
                    'client_id' => $client->get('id'),
                    'type' => $type
                ]);
                $clientMeters[] = $clientMeter;
            };
            $client->meters()->saveMany($clientMeters);
        });

        $houses = House::all();
        $houses->each(function ($house) {
            $houseMeters = [];
            foreach ($this->types as $type) {
                $houseMeter = Meter::factory()->make([
                    'house_id' => $house->get('id'),
                    'type' => $type
                ]);
                $houseMeters[] = $houseMeter;
            };
            $house->meters()->saveMany($houseMeters);
        });
    }
}
