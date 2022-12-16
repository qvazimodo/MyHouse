<?php

namespace Database\Seeders;

use Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ClientsSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->insert($this->getData());
    }

    private function getData()
    {
        $faker = Faker\Factory::create('ru_Ru');
        $data = [];
        $patronymic = [
            'Иванович', 'Петрович', 'Сергеевич', 'Тимофеевич', 'Алексеевич', 'Александрович'
        ];

        for ($i = 0; $i < 100; $i++) {
            $data[] = [
                'name' => $faker->firstName('male'),
                'patronymic' => $patronymic[array_rand($patronymic)],
                'last_name' => $faker->lastName('male'),
                'street' => $faker->streetName(),
                'house_number' => $faker->buildingNumber(),
//                'letter' => $faker->realText(1),
                'entrance' => rand(1, 10),
                'floor' => rand(1, 25),
                'apartment_number' => rand(1, 500),
                'residents_number' => rand(1, 7),
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => Str::random(50), // password
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $data;
    }
}
