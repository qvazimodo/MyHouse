<?php

namespace Database\Seeders;

use App\Models\Meter;
use App\Models\MeterValue;
use Illuminate\Database\Seeder;

class MeterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Meter::factory(10)
            ->createMany(MeterValue::factory()->create())
            ->create();
    }
}
