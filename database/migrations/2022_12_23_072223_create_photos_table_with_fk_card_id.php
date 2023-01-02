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
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('card_id')->nullable(false);
            $table->string('name')->default('without name');
            $table->string('path')->default('storage/images/woman.jpg');
            $table->string('thumbnail_path')->default('storage/images/woman.jpg');
            $table->unsignedInteger('width')->default(null);
            $table->unsignedInteger('height')->default(null);
            $table->timestamps();

            $table->foreign('card_id')->references('id')->on('cards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('photos',function (Blueprint $table){
            $table->dropForeign('photos_card_id_foreign');
        });
        Schema::dropIfExists('photos');
    }
};
