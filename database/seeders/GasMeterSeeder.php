<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker;

class GasMeterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gas_meters')->insert($this->getData());
    }

    private function getData()
    {
        $faker = Faker\Factory::create('ru_Ru');
        $data = [];


        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'number_of_meter' => $faker->numberBetween(1, 50),
                'user_id' => $faker->numberBetween(1, 100),
                'data_meter_now' => $faker->numberBetween(10, 70),

            ];
        }
        return $data;
    }

}
