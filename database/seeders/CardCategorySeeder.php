<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all();
        Card::all()->each(function ($card) use ($categories) {
            $card->categories()->save($categories[rand(0, 3)]);
            $card->categories()->save($categories[rand(4, 9)]);
        });
    }
}
