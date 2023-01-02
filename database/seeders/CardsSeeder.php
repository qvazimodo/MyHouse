<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Photo;
use Illuminate\Database\Seeder;


class CardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*       Card::factory()
                    ->has(Photo::factory()->count(3), 'photos')
                    ->create();*/

        /*        Card::factory()
                    ->hasPhotos(3)
                    ->create();*/
        \App\Models\Card::factory(3)
            ->has(
                \App\Models\Photo::factory(3)
            )->create();
    }


}
