<?php

namespace Database\Factories;
use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Year>
 */
class YearFactory extends Factory
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
            'number' => $faker->biasedNumberBetween(2019, 2023, 'Faker\Provider\Biased::linearHigh'),
        ];
    }
}
