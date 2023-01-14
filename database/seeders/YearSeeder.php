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
        Year::factory(3)
            ->create()
            ->each(function ($year) {
                $month = Month::factory(12)->create();
                /*->each(function ($month) use ($year) {
                    MonthYear::factory($month, $year);
                });*/
            });
    }
}
