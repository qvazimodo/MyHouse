<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Client;
use App\Models\Meter;
use App\Models\MeterValue;
use App\Models\Photo;
use App\Models\User;
use Faker;
use Illuminate\Database\Eloquent\Factories\Sequence;
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
        Client::factory(2)
            ->has(Card::factory(3)
                ->has(Photo::factory(3)))
            ->create();
        Client::factory(2)
            ->has(Meter::factory(2)
                ->has(MeterValue::factory()
                    ->count(4)
                ->state(new Sequence(
                    ['month_id'=>1],
                    ['month_id'=>2],
                    ['month_id'=>3],
                ))))
            ->create();
    }
}
