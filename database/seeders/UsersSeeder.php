<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Client;
use App\Models\Photo;
use App\Models\User;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = [
            'name' => 'admin',
            'patronymic' => 'admin',
            'last_name' => 'admin',
            'phone' => '8-999-888-77-55',
            'email' => 'admin@admin.ru',
            'is_admin' => '1',
            'email_verified_at' => '2022-12-06 18:20:59',
            'password' => Hash::make('123'),// password
            'remember_token' => 'sfrsfsfsfs',
            'created_at' => now(),
            'updated_at' => now(),
        ];
        User::insert($admin);
    }
}
