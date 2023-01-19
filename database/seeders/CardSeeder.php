<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Category;
use App\Models\Client;
use Illuminate\Database\Seeder;


class CardSeeder extends Seeder
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
            $cards = Card::factory(rand(0, 4))->make(['client_id' => $client->get('id')]);
            $client->cards()->saveMany($cards);
        });
    }
}
