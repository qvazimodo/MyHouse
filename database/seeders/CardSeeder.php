<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker;

class CardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cards')->insert($this->getData());
    }

    private function getData()
    {
        $faker = Faker\Factory::create('ru_Ru');
        $data = [];


        for ($i = 0; $i < 100; $i++) {
            $data[] = [
                'title' => $faker->sentence(),
                'price' => $faker->numberBetween(10000, 5000000),
                'description' => $faker->paragraph(3),
                'user_id' => $faker->numberBetween(1, 100),
            ];
        }
        return $data;
    }
}
