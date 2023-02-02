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
        Schema::create('card_category', function (Blueprint $table) {
            $table->id();
            $table->foreignId('card_id')->constrained('cards', 'id')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories', 'id')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('card_category', function (Blueprint $table){
            $table->dropForeign(['card_id']);
            $table->dropForeign(['category_id']);
        });
        Schema::dropIfExists('card_category');
    }
};
