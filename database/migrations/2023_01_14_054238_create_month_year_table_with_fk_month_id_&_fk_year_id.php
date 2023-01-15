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
        Schema::create('month_year', function (Blueprint $table) {
            $table->id();
            $table->foreignId('month_id')->constrained();
            $table->foreignId('year_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('month_year', function (Blueprint $table){
            $table->dropForeign(['month_id']);
            $table->dropForeign(['year_id']);
        });
        Schema::dropIfExists('month_years');
    }
};
