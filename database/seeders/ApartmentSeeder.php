<?php

namespace Database\Seeders;

use App\Models\Apartment;
use App\Models\House;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $houses = House::all();

        $houses->each(function ($house) {
            $apartments = Apartment::factory(rand(2, 5))
                ->make(['house_id' => $house->get('id')]);
            $house->apartments()->saveMany($apartments);
        });
    }
}
