<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HouseDescription>
 */
class HouseDescriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        return [
            'total_area' => $faker->numberBetween(2500, 25000),
            'commissioning_year' => $faker->numberBetween(1970, 2023),
            'service_start_date' => $faker->dateTimeBetween('-15 years', 'now'),
            'year_of_next_overhaul' => $faker->numberBetween(2023, 2055),
            'entrances_amount' => $faker->numberBetween(1, 10),
            'floors_amount' => $faker->numberBetween(1, 25),
            'apartments_amount' => $faker->numberBetween(10, 1000),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
