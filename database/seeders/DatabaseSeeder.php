<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(HouseNumberStreetSeeder::class);
        $this->call(HouseSeeder::class);
        $this->call(ApartmentSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(CardSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(CardCategorySeeder::class);
        $this->call(PhotosSeeder::class);
        $this->call(MeterSeeder::class);
        $this->call(MonthSeeder::class);
        $this->call(YearSeeder::class);
        $this->call(MonthYearSeeder::class);
        $this->call(MeterMonthYearSeeder::class);
        $this->call(EmployeeSeeder::class);
        $this->call(TimeWindowSeeder::class);
        $this->call(EmployeeServicedAddressSeeder::class);
        $this->call(EmployeeAdminstratorSeeder::class);
    }
}
