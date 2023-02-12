<?php

namespace Database\Factories;

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
            'path' => 'public/ads-images/' . rand(1,2) . '.jpg',
            //'thumbnail_path' => $faker->filePath(),
            'width' => 400,
            'height' => 300,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
