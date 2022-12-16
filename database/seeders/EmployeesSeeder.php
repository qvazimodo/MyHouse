<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert($this->getData());
    }

    private function getData()
    {
        $data = [];
        $data[] = [
            'name' => 'Admin',
            'email' => 'admin@admin.ru',
            'is_admin'=> true,
            'email_verified_at' => now(),
            'password' =>  Hash::make('123'), // password
            'remember_token' => Str::random(10),
            'created_at'=>now(),
            'updated_at'=>now(),
            ];
        for ($i = 0; $i < 10; $i++){
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
        }
        return $data;
    }
}
