<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $held_position = [
            'директор', 'бухгалтер', 'мастер', 'электрик', 'сантехник', 'дворник', 'уборщица'
        ];

        return [
            'user_id' => User::factory()->create(),
            'held_position' => $held_position[array_rand($held_position)],
            'created_at' => now(),
            'updated_at' => now(),
        ];

    }
}
