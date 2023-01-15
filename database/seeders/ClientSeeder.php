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
        ->has(Meter::factory(4)         //количество счётчиков у клиента
           /* ->has(MeterValue::factory()
            ->count(12)
            ->hasAttached(MonthYear::all())*/
            //количество показаний у каждого счётчика (кратно 12)
            /*  ->state(new Sequence(
              ['month_id' => 1],
              ['month_id' => 2],
              ['month_id' => 3],
              ['month_id' => 4],
              ['month_id' => 5],
              ['month_id' => 6],
              ['month_id' => 7],
              ['month_id' => 8],
              ['month_id' => 9],
              ['month_id' => 10],
              ['month_id' => 11],
              ['month_id' => 12],
          ))*/
//            ->afterCreating(function (MeterValue $meterValue) {
//                if ($meterValue['id'] !== 1) {
//                    $meterValue['parent_id'] = $meterValue['id'] - 1;
//                    $meterValue->save();
//                }
//            })
        )
            ->has(Apartment::factory()                     //количество квартир у клиента
                ->has(House::factory()                     //дом, в котором расположена квартира клиента
                    ->has(HouseNumberStreet::factory())         //адрес дома
                    ->has(HouseDescription::factory()      //описание (параметры) дома
                    )
                )
            )
        ->create();
    }
}
