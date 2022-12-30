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
        Schema::table('meters', function (Blueprint $table) {
            $table->unsignedBigInteger('month')->comment('номер месяца, которому соответствуют текущие показания счётчика')->change();
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
            $table->enum('month', [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            ])->comment('месяц, которому соответствуют текущие показания счётчика')->change();
        });
    }
};
