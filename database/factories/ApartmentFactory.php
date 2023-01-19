<?php

namespace Database\Factories;

use App\Models\House;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Apartment>
 */
class ApartmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = \Faker\Factory::create('ru_Ru');
        return [
            'house_id' => null,
            'entrance' => $faker->numberBetween(1, 5),
            'floor' => $faker->numberBetween(1, 25),
            'number' => $faker->numberBetween(1, 1000),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
