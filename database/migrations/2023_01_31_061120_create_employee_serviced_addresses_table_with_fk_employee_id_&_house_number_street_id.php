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
            $table->unsignedBigInteger('addresses_street_id')->nullable(false)->comment('id улицы адреса объекта');
            $table->foreign('addresses_street_id')->references('street_id')->on('addresses')->onDelete('cascade');
            $table->unsignedBigInteger('addresses_house_number_id')->nullable(false)->comment('id номера дома адреса объекта');
            $table->foreign('addresses_house_number_id')->references('house_number_id')->on('addresses')->onDelete('cascade');
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
            $table->dropForeign(['addresses_street_id']);
            $table->dropForeign(['addresses_house_number_id']);
        });

        Schema::dropIfExists('employee_serviced_addresses');
    }
};
