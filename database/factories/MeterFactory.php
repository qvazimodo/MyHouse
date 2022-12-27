<?php

namespace Database\Factories;

use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meter>
 */
class MeterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = Faker\Factory::create('ru_Ru');
        $type = [
            'hot_water', 'cold_water', 'electricity', 'heat'
        ];
        $month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return [
            'user_id' => $faker->numberBetween(1, 100),
            'meter_id' => $faker->numberBetween(1, 100),
            'type' => $type[array_rand($type)],
            'number' => $faker->numberBetween(1000, 9000),
            'month' => $month[array_rand($month)],
            'value' => $faker->numberBetween(100, 900),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
