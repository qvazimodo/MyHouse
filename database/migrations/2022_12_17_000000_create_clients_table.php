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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('apartment_id')->nullable(false);
            /* $table->string('name', 25);
             $table->string('patronymic', 25)->comment('отчество');
             $table->string('last_name', 25)->comment('фамилия')->nullable();
             $table->string('street', 30);
             $table->integer('house_number');
             $table->string('letter', 1)->default('');
             $table->integer('entrance')->comment('подъезд');
             $table->integer('floor')->comment('этаж');
             $table->integer('apartment_number')->comment('номер квартиры');
             $table->integer('residents_number')->comment('количество проживающих');
             $table->string('email')->unique();
             $table->timestamp('email_verified_at');
             $table->string('password');
             $table->rememberToken();*/
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
        Schema::dropIfExists('clients');
    }
};
