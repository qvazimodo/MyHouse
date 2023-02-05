<?php

namespace Database\Seeders;

use App\Models\Month;
use App\Models\Year;
use Illuminate\Database\Seeder;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Year::factory(1)->create();
    }
}
