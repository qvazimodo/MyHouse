<?php

namespace Database\Seeders;

use App\Models\Month;
use Illuminate\Database\Seeder;

class MonthsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $month = [

            [
                'month' => 'Январь',

            ],
            [
                'month' => 'Февраль',

            ],
            [
                'month' => 'Март',

            ],
            [
                'month' => 'Апрель',

            ],
            [
                'month' => 'Май',

            ],
            [
                'month' => 'Июнь',

            ],
            [
                'month' => 'Июль',

            ],
            [
                'month' => 'Август',

            ],
            [
                'month' => 'Сентябрь',

            ],
            [
                'month' => 'Октябрь',

            ],
            [
                'month' => 'Ноябрь',

            ],
            [
                'month' => 'Декабрь',

            ],
        ];

        Month::query()->insert($month);
    }
}
