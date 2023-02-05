<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Meter;
use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use function Symfony\Component\Translation\t;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meter>
 */
class MeterFactory extends Factory
{
    private array $parentIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

            'number' => rand(102030405060, 304050607080),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
