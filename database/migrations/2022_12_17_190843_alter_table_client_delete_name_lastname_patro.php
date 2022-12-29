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
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn(['name']);
            $table->dropColumn(['patronymic']);
            $table->dropColumn(['last_name']);
            $table->dropColumn(['email']);
            $table->dropColumn(['email_verified_at']);
            $table->dropColumn(['password']);
            $table->dropColumn(['remember_token']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->string('name', 25);
            $table->string('patronymic', 25)->comment('отчество');
            $table->string('last_name', 25)->comment('фамилия')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
};
