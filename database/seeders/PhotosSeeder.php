<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Photo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhotosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cards = Card::all();
        $cards->each(function ($card) {
            $photos = Photo::factory(rand(1,3))->make(['card_id' => $card->get('id')]);
            $card->photos()->saveMany($photos);
        });
    }
}
