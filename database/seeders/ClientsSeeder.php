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
        Client::factory(3)
            ->has(Card::factory(3)
                ->has(Photo::factory(3)))
            ->create();
        Client::factory(2)                      //количество клиентов
            ->has(Meter::factory(2)             //количество счётчиков у клиента
                ->has(MeterValue::factory()
                    ->state(new Sequence(
                        ['month_id' => 1],
                        ['month_id' => 2],
                        ['month_id' => 3],
                    ))
                    ->afterCreating(function (MeterValue $meterValue) {
                        if ($meterValue['id'] !== 1) {
                            $meterValue['parent_id'] = $meterValue['id'] - 1;
                            $meterValue->save();
                        }

                        var_dump($meterValue['id']);
                    })->count(3)                //количество показаний счётчика
                ))
            ->create();
    }
}
