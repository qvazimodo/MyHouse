<?php

namespace Database\Seeders;

use App\Models\Month;
use App\Models\Year;
use Illuminate\Database\Seeder;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Year::factory(3)->create();
        Month::factory(12)->create();
        $months = Month::all();
        Year::all()->each(function ($year) use ($months) {
            $year->months()->saveMany($months);
        });
    }
}
