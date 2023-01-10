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
        Schema::create('house_numbers', function (Blueprint $table) {
            $table->id();
            $table->string('value')->nullable(false)->comment('номер дома');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('house_numbers', function (Blueprint $table){
            $table->dropSoftDeletes();
        });
        Schema::dropIfExists('house_numbers');
    }
};
