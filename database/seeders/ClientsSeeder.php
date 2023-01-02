<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\Client;
use App\Models\Meter;
use App\Models\MeterValue;
use App\Models\Photo;
use App\Models\User;
use Faker;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::factory(2)              //количество клиентов
        ->has(Card::factory(3)          //количество объявлений у клиента
        ->has(Photo::factory(3)))       //количество фотографий у объявления
        ->has(Meter::factory(2)         //количество счётчиков у клиента
        ->has(MeterValue::factory()
            ->count(24)                 //количество показаний у каждого счётчика (кратно 12)
            ->state(new Sequence(
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
            ))
            ->afterCreating(function (MeterValue $meterValue) {
                if ($meterValue['id'] !== 1) {
                    $meterValue['parent_id'] = $meterValue['id'] - 1;
                    $meterValue->save();
                }
            })
        ))
            ->create();
    }
}
