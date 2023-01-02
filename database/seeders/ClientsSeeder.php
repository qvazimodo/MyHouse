<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Client;
use App\Models\Photo;
use App\Models\User;
use Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::factory(10)
            ->has(Card::factory(3)
                ->has(Photo::factory(3)))
                ->create();
    }
}
