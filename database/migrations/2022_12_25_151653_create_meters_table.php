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
            $table->integer('number')->default(0)->comment('заводской номер счетчика');
            $table->integer('previous_record_number')->default(0)->comment('показания счетчика прошлые');
            $table->integer('value')->default(0)->comment('показания счетчика текущие');
            $table->enum('type', ['hot_water', 'cold_water', 'electricity', 'heat'])
                ->default('hot_water')
                ->comment('тип счетчика');
            $table->timestamp('date')->comment('дата записи показаний счетчика');
            $table->biginteger('user_id')->unsigned()->nullable(false)->comment('id пользователя');
            $table->timestamps();

        });

        Schema::table('meters', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
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
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('meters');
    }
};
