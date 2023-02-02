<?php

namespace Database\Factories;

use App\Models\Meter;
use App\Models\Month;
use App\Models\MonthYear;
use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MeterValue>
 */
class MeterValueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = Faker\Factory::create('ru_Ru');
        return [
            'meter_id' => Meter::factory(),
            'month_year_id' => MonthYear::factory(),
            'value' => $faker->biasedNumberBetween(100, 200000,
                $function = 'Faker\Provider\Biased::linearHigh'),
        ];
    }
}
