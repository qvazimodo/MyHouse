<?php

namespace Database\Seeders;

use App\Models\Month;
use Illuminate\Database\Seeder;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [

            [
                'name' => 'Январь',

            ],
            [
                'name' => 'Февраль',

            ],
            [
                'name' => 'Март',

            ],
            [
                'name' => 'Апрель',

            ],
            [
                'name' => 'Май',

            ],
            [
                'name' => 'Июнь',

            ],
            [
                'name' => 'Июль',

            ],
            [
                'name' => 'Август',

            ],
            [
                'name' => 'Сентябрь',

            ],
            [
                'name' => 'Октябрь',

            ],
            [
                'name' => 'Ноябрь',

            ],
            [
                'name' => 'Декабрь',

            ],
        ];

        Month::query()->insert($name);
    }
}
