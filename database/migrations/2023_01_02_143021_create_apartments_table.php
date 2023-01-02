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
        Schema::create('apartments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('house_id')->nullable(false);
            $table->foreign('house_id')->references('id')->on('houses');
            $table->unsignedSmallInteger('entrance')->default(1)->comment('номер подъезда');
            $table->unsignedSmallInteger('floor')->default(1)->comment('номер этажа');
            $table->unsignedSmallInteger('number')->default(1)->comment('номер квартиры');
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
        Schema::dropIfExists('table_apartments');
    }
};
