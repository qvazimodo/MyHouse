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
        Schema::create('house_descriptions', function (Blueprint $table) {
            $table->id();
            $table->float('total_area', 10, 2)
                ->nullable(false)->comment('общая площадь');
            $table->unsignedInteger('commissioning_year')->nullable(false)->comment('год ввода в эксплуатацию');
            $table->timestamp('service_start_date')->nullable(false)->comment('дата начала обслуживания');
            $table->unsignedInteger('year_of_next_overhaul')->nullable(false)->comment('год следующего капитального ремонта');
            $table->integer('entrances_amount')->default(1)->nullable(false)->comment('количество подъездов');
            $table->integer('floors_amount')->default(1)->nullable(false)->comment('количество этажей');
            $table->integer('apartments_amount')->default(1)->nullable(false)->comment('количество квартир');
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
        Schema::dropIfExists('house_descriptions');
    }
};
