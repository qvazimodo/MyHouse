<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker;

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

        return [
            'user_id' => $faker->numberBetween(1, 100),
            'type' => $type[array_rand($type)],
            'number' => $faker->numberBetween(1000, 9000),
            'value' => $faker->numberBetween(100, 900),
            'date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
