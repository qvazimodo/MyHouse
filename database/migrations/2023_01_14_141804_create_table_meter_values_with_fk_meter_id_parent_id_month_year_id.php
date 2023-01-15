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
        Schema::create('meter_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('meter_id')->nullable(false)->comment('id счётчика');
            $table->unsignedBigInteger('parent_id')->nullable()->comment(
                'id строки с предыдущими показаниями счётчика');
            $table->foreign('parent_id')->references('id')->on('meter_values')->onDelete('restrict');
            $table->unsignedBigInteger('month_year_id')->nullable(false)->comment('номер строки в таблица связи месяцев с годами');
            /*            $table->enum('month_id', [
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                        ])->comment('порядковый номер месяца в году');*/
            $table->float('value', 10, 2, true);
            $table->timestamps();
        });

        Schema::table('meter_values', function (Blueprint $table) {

            $table->foreign('month_year_id')->references('id')->on('month_year')->onDelete('restrict');
            $table->foreign('meter_id')->references('id')->on('meters')->onDelete('restrict');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('meters_values', function (Blueprint $table) {
            $table->dropForeign(['meters_id']);
            $table->dropForeign(['parent_id']);
            $table->dropForeign(['month_year_id']);
        });
        Schema::dropIfExists('meters_values');
    }
};
