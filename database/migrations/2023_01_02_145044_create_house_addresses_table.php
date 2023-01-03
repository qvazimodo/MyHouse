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
        Schema::create('house_addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('street_id')->nullable(false);
            $table->foreign(['street_id'])->references('id')->on('streets');
            $table->unsignedBigInteger('house_number_id')->nullable(false);
            $table->foreign(['house_number_id'])->references('id')->on('house_numbers');
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
        Schema::table('house_addresses', function (Blueprint $table){
            $table->dropForeign(['street_id']);
            $table->dropForeign(['house_number_id']);
        });
        Schema::dropIfExists('house_addresses');
    }
};
