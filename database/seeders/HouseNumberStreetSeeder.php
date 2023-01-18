<?php

namespace Database\Seeders;

use App\Models\HouseNumber;
use App\Models\Street;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HouseNumberStreetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(StreetSeeder::class);
        $this->call(HouseNumberSeeder::class);

        $streets = Street::all()->random();

        $streets->each(function ($street) {
            $housesNumbersRandom = HouseNumber::all()->random(rand(1, 3));
            $street->houseNumbers()->saveMany($housesNumbersRandom);
        });
    }
}
