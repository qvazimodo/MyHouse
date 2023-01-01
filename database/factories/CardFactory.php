<?php

namespace Database\Factories;

use App\Models\Client;
use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Card>
 */
class CardFactory extends Factory
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
            'client_id' => Client::factory()->create(),
            'title' => $faker->title(),
            'price' => rand(10, 100),
            'description' => $faker->realText(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
