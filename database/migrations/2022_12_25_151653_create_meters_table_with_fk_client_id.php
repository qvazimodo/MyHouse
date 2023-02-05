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
            $table->unsignedBigInteger('client_id')->nullable()->comment('id клиента');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->enum('type', ['горячая вода', 'холодная вода', 'электроэнергия', 'тепловая энергия', 'газ'])
                ->default('горячая вода')
                ->comment('тип счетчика');
            $table->unsignedBigInteger('number')->comment('заводской номер счетчика');
            $table->timestamps();
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
            $table->dropForeign(['client_id']);
        });
        Schema::dropIfExists('meters');
    }
};
