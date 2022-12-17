<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker;

class EmployeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert($this->getData());

    }

    private function getData()
    {
        //$faker = Faker\Factory::create('ru_Ru');
        $data = [];
        $data[] = [
            'user_id' => 101,
            'profession' => 'admin',
            ];

        /*for ($i = 0; $i < 10; $i++){
            $data[]=[
                'name' => fake('ru_RU')->name(),
                'email' => fake()->unique()->safeEmail(),
                'is_admin'=> rand(0,1) === 1,
                'email_verified_at' => now(),
                'password' =>  Str::random(50), // password
                'remember_token' => Str::random(10),
                'created_at'=>now(),
                'updated_at'=>now(),
            ];
        }*/
        return $data;
    }
}
