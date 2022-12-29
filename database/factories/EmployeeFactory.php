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
        $profession = [
            'директор', 'бухгалтер', 'мастер', 'электрик', 'сантехник', 'дворник', 'уборщица'
        ];

        return [
            'user_id' => User::factory()->create(),
            'profession' => $profession[array_rand($profession)],
            'created_at' => now(),
            'updated_at' => now(),
        ];

    }
}
