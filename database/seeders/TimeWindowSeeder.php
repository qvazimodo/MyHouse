<?php

namespace Database\Seeders;

use App\Models\TimeWindow;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TimeWindowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $a = 8;
        for ($i = 1; $i <= 4; $i++){
            TimeWindow::create([
                'time_window' => $a. ":00 - " . $a+2 . ":00",
            ]);
            $a += 2;
        }

    }
}
