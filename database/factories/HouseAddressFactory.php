<?php

namespace Database\Factories;

use App\Models\HouseNumber;
use App\Models\Street;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HouseAddress>
 */
class HouseAddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'street_id' => Street::factory(),
            'house_number_id' => HouseNumber::factory(),
        ];
    }
}
