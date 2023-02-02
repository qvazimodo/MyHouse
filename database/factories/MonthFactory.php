<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Month>
 */
class MonthFactory extends Factory
{
    private $months = [

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
    static $i = 0;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => function () {
                self::$i = self::$i > 11 ? 0:self::$i;
                return $this->months[self::$i++]['name'];
            }
        ];
    }


}
