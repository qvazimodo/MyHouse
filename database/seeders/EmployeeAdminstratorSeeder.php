<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\User;
use Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeAdminstratorSeeder extends Seeder
{
    private array $admintstrationPositions = ['директор', 'бухгалтер', 'мастер', 'мастер', 'мастер'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $patronymic = [
            'Иванович', 'Петрович', 'Сергеевич', 'Тимофеевич', 'Алексеевич', 'Александрович'
        ];
        $faker = Faker\Factory::create('ru_Ru');

        foreach ($this->admintstrationPositions as $position) {
            $employee = new Employee();
            $parameters = [
                'name' => $faker->firstName('male'),
                'patronymic' => $patronymic[array_rand($patronymic)],
                'last_name' => $faker->lastName('male'),
                'birth_date' => $faker->dateTimeBetween('-50 years', '-20 years'),
                'phone' => fake()->unique()->phoneNumber(),
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => Hash::make('123'), // password
                'remember_token' => Str::random(10),
                'is_admin' => '1',
            ];
            dump($parameters);
            $user = User::create($parameters);
            $employee->user()->associate($user);
            $employee['held_position'] = $position;
            $employee->save();
        }
    }
}
