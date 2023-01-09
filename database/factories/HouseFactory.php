<?php

namespace Database\Factories;

use App\Models\HouseDescription;
use App\Models\HouseNumberStreet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\House>
 */
class HouseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'house_number_street_id'=>HouseNumberStreet::factory(),
            'house_descriptions_id'=>HouseDescription::factory(),
            'created_at'=>now(),
            'updated_at'=>now(),
        ];
    }
}
