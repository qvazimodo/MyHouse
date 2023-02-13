<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meter>
 */
class MeterFactory extends Factory
{
    private array $accuracyClasses = [1.5, 1, 0.6, 0.4, 0.25, 0.15];


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        $startDate = now();
        return [
            'number' => rand(102030405060, 304050607080),
            'created_at' => $startDate,
            'updated_at' => $startDate,
            'accuracy_class' => $this->accuracyClasses[array_rand($this->accuracyClasses)],
            'manufacturing_date' => $faker->dateTimeBetween('-12 years', '-2 years'),
            'next_verification_date' => $faker->dateTimeBetween('+1 years', '+3 years'),
        ];
    }
}
