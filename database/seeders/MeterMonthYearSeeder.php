<?php

namespace Database\Seeders;

use App\Models\Meter;
use App\Models\MeterMonthYear;
use App\Models\MonthYear;
use Faker\Factory;
use Illuminate\Database\Seeder;

class MeterMonthYearSeeder extends Seeder
{
    static int $value = 0;
    static bool $newMeter = true;

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
        MeterMonthYear::all()->each(function ($item) {
            $faker = Factory::create('ru_Ru');
            self::$value = self::$value + $faker->numberBetween(100, 300);
            $item->value = self::$value;
            $item->save();
        });
        $metersAmount = MeterMonthYear::query()->get()->last()->meter_id;
        for ($i = 1; $i <= $metersAmount; $i++) {
            self::$newMeter = true;
            MeterMonthYear::query()->get()->where('meter_id', $i)
                ->each(function ($item) use ($i) {
                    if (!self::$newMeter) {
                        $item->parent_id = $item->id - 1;
                        $item->save();
                    }
                    self::$newMeter = false;
                });
        }
    }
}
