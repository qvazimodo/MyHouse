<?php

namespace Database\Factories;

use App\Models\Month;
use Faker;
use App\Models\Meter;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Support\Facades\DB;

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
        $months = Month::all();
        return [
            'meter_id' => Meter::factory(),
            'month_id' => rand(1, 12),
            'value' => $faker->numberBetween(100, 10000),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
