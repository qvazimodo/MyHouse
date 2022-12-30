<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meters', function (Blueprint $table) {
            $table->id();
            $table->biginteger('user_id')->unsigned()->nullable(false)->comment('id пользователя');
            $table->integer('meter_id')->default(0)->comment('номер записи с предыдущими показаниями счётчика');
            $table->enum('type', ['горячая вода', 'холодная вода', 'электричество', 'тепловая энергия', 'газ'])
                ->default('горячая вода')
                ->comment('тип счетчика');
            $table->integer('number')->default(0)->comment('заводской номер счетчика');
            $table->enum('month', [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            ])->comment('месяц, которому соответствуют текущие показания счётчика');
            $table->integer('value')->default(0)->comment('текущие показания счетчика');
            $table->timestamps();
        });

        Schema::table('meters', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            //индекс для ускорения получения данных конкретного пользователя за конкретный месяц
            $table->index(['user_id', 'month']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('meters', function (Blueprint $table) {
            $table->dropForeign(['user_id', 'meter_id']);
        });
        Schema::dropIfExists('meters');
    }
};
