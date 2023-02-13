<?php

namespace Database\Seeders;

use App\Models\House;
use App\Models\HouseDescription;
use App\Models\HouseNumberStreet;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HouseNumberStreet::all()->each(function ($address) {
            $house = new House();
            $houseDescription = HouseDescription::factory()->create();
            $house->houseNumberStreet()->associate($address);
            $house->houseDescription()->associate($houseDescription);
            $house->save();
        });
    }
}
