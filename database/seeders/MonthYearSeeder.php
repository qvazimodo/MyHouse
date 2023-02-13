<?php

namespace Database\Seeders;

use App\Models\Month;
use App\Models\MonthYear;
use App\Models\Year;
use Illuminate\Database\Seeder;

class MonthYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $months = Month::all();
        Year::all()->each(function ($year) use ($months) {
            $year->months()->saveMany($months);
        });
    }
}
