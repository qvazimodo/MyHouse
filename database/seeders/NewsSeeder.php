<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->insert($this->getData());
    }

    private function getData() {
        $data = [];
        $faker = Faker\Factory::create('ru_RU');
        for ($i = 0; $i < 15 ; $i++) {
            $data[] = [
                'title' => $faker->realText(rand(10, 20)),
                'content' => $faker->realText(rand(100, 300)),
                'created_at' => $faker->date(),
                'updated_at' => $faker->date(),
            ];
        }
        return $data;
    }
}
