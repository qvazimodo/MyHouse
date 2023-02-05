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
        $faker = Factory::create('ru_Ru');
        $meters = Meter::all();
        $monthYears = MonthYear::all();
        $meters->each(function ($meter) use ($monthYears) {
            $meter->monthYear()->saveMany($monthYears);
        });

        $clientsMeters = Meter::query()->whereNotNull('client_id');
        $housesMeters = Meter::query()->whereNotNull('house_id');

        $clientsMeters->each(function ($meter) use ($faker) {
            self::$newMeter = true;
            MeterMonthYear::query()->get()->where('meter_id', $meter->id)
                ->each(function ($item) use ($faker) {
                    if (self::$newMeter) {
                        self::$value = $faker->numberBetween(5, 30);
                        $item->value = self::$value;
                    } else {
                        self::$value = self::$value + $faker->numberBetween(100, 300);
                        $item->value = self::$value;
                        $item->parent_id = $item->id - 1;
                        $item->save();
                    }
                    self::$newMeter = false;
                });
        });

        $housesMeters->each(function ($meter) use ($faker) {
            self::$newMeter = true;
            MeterMonthYear::query()->get()->where('meter_id', $meter->id)
                ->each(function ($item) use ($faker) {
                    if (self::$newMeter) {
                        self::$value = $faker->numberBetween(5, 30);
                        $item->value = self::$value;
                    } else {
                        self::$value = self::$value + $faker->numberBetween(35000, 75000);
                        $item->value = self::$value;
                        $item->parent_id = $item->id - 1;
                        $item->save();
                    }
                    self::$newMeter = false;
                });
        });
    }
}
