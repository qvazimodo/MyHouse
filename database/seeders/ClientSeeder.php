<?php

namespace Database\Seeders;

use App\Models\Apartment;
use App\Models\Card;
use App\Models\Client;
use App\Models\House;
use App\Models\HouseAddress;
use App\Models\HouseDescription;
use App\Models\HouseNumberStreet;
use App\Models\Meter;
use App\Models\MeterValue;
use App\Models\MonthYear;
use App\Models\Photo;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::factory(10)             //количество клиентов
        ->has(Card::factory(3)          //количество объявлений у клиента
            ->has(Photo::factory(3))    //количество фотографий у объявления
             )
        ->has(Meter::factory(rand(1,3)))        //количество счётчиков у клиента
            ->has(Apartment::factory()                     //количество квартир у клиента
                ->has(House::factory()                     //дом, в котором расположена квартира клиента
//                    ->has(HouseNumberStreet::factory())         //адрес дома
                    ->has(HouseDescription::factory()      //описание (параметры) дома
                    )
                )
            )
        ->create();
    }
}
