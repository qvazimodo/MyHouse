<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\HouseNumberStreet;
use Illuminate\Database\Seeder;

class EmployeeServicedAddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addresses = HouseNumberStreet::all();
        $addresses->each(function ($address) {
            $employees = Employee::query()->inRandomOrder()->limit(rand(3, 5))->get();
            $address->employees()->saveMany($employees);
        });
    }
}