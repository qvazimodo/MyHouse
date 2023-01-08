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
        $faker = Faker\Factory::create('ru_Ru');
        $type = [
            'горячая вода', 'холодная вода', 'электричество', 'тепловая энергия', 'газ'
        ];
        $month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        $number = [1111111, 2222222, 3333333, 4444444, 5555555, 6666666, 7777777, 8888888];
        return [
            'client_id' => Client::factory(),
            'type' => $type[array_rand($type)],
            'number' => $number[array_rand($number)],
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
