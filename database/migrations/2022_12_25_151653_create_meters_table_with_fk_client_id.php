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
            $table->morphs('measurable');
            $table->enum('type', ['горячая вода', 'холодная вода', 'электроэнергия', 'тепловая энергия', 'газ'])
                ->default('горячая вода')
                ->comment('тип счетчика');
            $table->unsignedBigInteger('number')->nullable(false)->comment('заводской номер счетчика');
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
            $table->dropMorphs('measurable');
        });
        Schema::dropIfExists('meters');
    }
};
