<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::table('clients')->insert($this->getData());

        User::factory(100)->create();

        $admin = [
            'name' => 'admin',
            'patronymic' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@admin',
            'is_employee' => '1',
            'is_client' => '0',
            'is_admin' => '1',
            'email_verified_at' => '2022-12-06 18:20:59',
            'password' =>  Hash::make('123'),// password
            'remember_token' => 'sfrsfsfsfs',



        ];
        User::insert($admin);
    }

    /*private function getData()
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
                'is_employee' => '0',
                'is_client' => '1',
                'is_admin' => '0',
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => Str::random(50), // password
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        return $data;
    }*/
}
