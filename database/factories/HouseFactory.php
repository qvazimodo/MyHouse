<?php

namespace Database\Factories;

use App\Models\HouseAddress;
use App\Models\HouseDescription;
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
            'house_address_id'=>HouseAddress::factory(),
            'house_descriptions_id'=>HouseDescription::factory(),
            'created_at'=>now(),
            'updated_at'=>now(),
        ];
    }
}
