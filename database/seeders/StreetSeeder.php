<?php

namespace Database\Seeders;

use App\Models\Street;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StreetSeeder extends Seeder
{
    private array $streets = [
        ['name' => 'имени Платонова'],
        ['name' => 'Юбилейная'],
        /*        ['name' => 'Краснознамённая'],
                ['name' => 'Триумфаторов'],
                ['name' => 'имени Гагарина'],*/
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Street::query()->insert($this->streets);
    }
}
