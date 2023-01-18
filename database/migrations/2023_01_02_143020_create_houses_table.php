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
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('house_number_street_id')->nullable(false);
            $table->foreign('house_number_street_id')->references('id')->on('house_number_street');
            $table->foreignId('house_descriptions_id')->nullable(false);
            $table->foreign('house_descriptions_id')->references('id')->on('house_descriptions');
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
        Schema::create('houses', function (Blueprint $table){
            $table->dropForeign(['house_number_street_id']);
            $table->dropForeign(['house_descriptions_id']);
        });
        Schema::dropIfExists('houses');
    }
};
