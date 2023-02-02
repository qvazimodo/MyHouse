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
        Schema::create('employee_serviced_address', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id')->nullable(false)->comment('id сотрудника');
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->unsignedBigInteger('house_number_street_id')->nullable(false)->comment('id адреса объекта');
            $table->foreign('house_number_street_id')->references('id')->on('house_number_street')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employee_serviced_address', function (Blueprint $table) {
            $table->dropForeign(['employee_id']);
            $table->dropForeign(['house_number_street_id']);
        });

        Schema::dropIfExists('employee_serviced_addresses');
    }
};
