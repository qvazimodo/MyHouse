<?php

namespace Database\Factories;

use App\Models\Month;
use App\Models\Year;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MonthYear>
 */
class MonthYearFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'month_id'=>Month::factory(),
            'year_id'=>Year::factory(),
        ];
    }
}
