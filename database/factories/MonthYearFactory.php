<?php

namespace Database\Factories;

use App\Models\Month;
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
    public function definition($month, $year)
    {
        return [
            'month_id'=>Month::factory(),
        ];
    }
}
