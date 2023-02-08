<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('house_descriptions_id')->nullable(false);
            $table->foreign('house_descriptions_id')->references('id')->on('house_descriptions');
            $table->foreignId('addresses_street_id')->nullable(false);
            $table->foreign('addresses_street_id')->references('street_id')->on('addresses');
            $table->foreignId('addresses_house_number_id')->nullable(false);
            $table->foreign('addresses_house_number_id')->references('house_number_id')->on('addresses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->dropForeign(['house_descriptions_id']);
            $table->dropForeign(['addresses_street_id']);
            $table->dropForeign(['addresses_house_number_id']);

        });
        Schema::dropIfExists('houses');
    }
};
