<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
//use App\Models\User;
use App\Models\User;
use Illuminate\Database\Seeder;

class OldDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        /*        $this->call(MonthSeeder::class);
                $this->call(UsersSeeder::class);
                $this->call(ClientSeeder::class);
                $this->call(EmployeeSeeder::class);*/

        $this->call(AdminSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(CardsSeeder::class);
        $this->call(YearSeeder::class);
        $this->call(MeterMonthYearSeeder::class);
        $this->call(EmployeeSeeder::class);

//        $this->call(CardsSeeder::class);

//        $this->call(MeterSeeder::class);
    }
}