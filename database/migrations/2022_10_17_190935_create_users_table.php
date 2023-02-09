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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 25);
            $table->string('patronymic', 25)->comment('отчество');
            $table->string('last_name', 25)->comment('фамилия')->nullable();
            $table->timestamp('birth_date')->comment('дата рождения')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->string('phone', 20)->unique()->default(null);
            $table->string('email',50)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
