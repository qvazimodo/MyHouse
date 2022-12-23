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
        Schema::create('hot_water_meters', function (Blueprint $table) {
            $table->id();
            $table->integer('number_of_meter')->default(0);  // зав номер счетчика
            $table->biginteger('user_id')->unsigned()->nullable(false);     // id пользователя
            $table->integer('data_meter_last')->default(0);   // показания счетчика за прошлый период
            $table->integer('data_meter_now')->default(0);    // показания счетчика новые
            $table->timestamps();

        });

        Schema::table('hot_water_meters', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');//внешний ключ user_id на  id таблицы users
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hot_water_meters');

        Schema::table('hot_water_meters', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
    }
};
