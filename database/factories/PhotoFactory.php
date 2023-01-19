<?php

namespace Database\Factories;

use App\Models\Card;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Photo>
 */
class PhotoFactory extends Factory
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
            'card_id' => null,
            'name' => $faker->title,
            'path' => $faker->filePath(),
            'thumbnail_path' => $faker->filePath(),
            'width' => 400,
            'height' => 300,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
