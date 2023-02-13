<?php

namespace Database\Factories;

use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $patronymic = [
            'Иванович', 'Петрович', 'Сергеевич', 'Тимофеевич', 'Алексеевич', 'Александрович'
        ];
        $faker = Faker\Factory::create('ru_Ru');

        return [
            'name' => $faker->firstName('male'),
            'patronymic' => $patronymic[array_rand($patronymic)],
            'last_name' => $faker->lastName('male'),
            'birth_date' => $faker->dateTimeBetween('-50 years', '-20 years'),
            'is_admin' => '0',
            'phone' => fake()->unique()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('123'), // password
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
