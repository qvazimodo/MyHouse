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
       Schema::table('meter_values', function (Blueprint $table){
           $table->dropForeign(['month_id']);
       });
       Schema::dropColumns('meter_values', ['month_id']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('meter_values', function (Blueprint $table){
            $table->foreignId('month_id')->constrained();
        });
    }
};
