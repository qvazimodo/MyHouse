<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    private array $names = [
        ['name' => 'покупка',],
        ['name' => 'продажа',],
        ['name' => 'обмен',],
        ['name' => 'отдам в хорошие руки',],
        ['name' => 'животные',],
        ['name' => 'бытовая техника',],
        ['name' => 'автомобили',],
        ['name' => 'инструменты',],
        ['name' => 'книги',],
        ['name' => 'игрушки'],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::query()->insert($this->names);
    }
}
