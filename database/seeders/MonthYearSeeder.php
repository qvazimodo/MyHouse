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
        MonthYear::factory(1)         //количество лет //количество лет
        ->has(Year::factory()->has(Month::factory(12))->create())->create();
    }
}
