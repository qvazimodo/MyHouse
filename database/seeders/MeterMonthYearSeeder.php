<?php

namespace Database\Seeders;

use App\Models\Meter;
use App\Models\MonthYear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MeterMonthYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $meters = Meter::all();
        $monthYears = MonthYear::all();
        $meters->each(function ($meter) use ($monthYears) {
            $meter->monthYear()->saveMany($monthYears);
        });
    }
}
