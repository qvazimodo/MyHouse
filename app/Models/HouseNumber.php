<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HouseNumber extends Model
{
    use HasFactory;

    protected $fillable = ['value'];
    public $timestamps = false;

    public function houseNumberStreets():HasMany{
        return $this->hasMany(HouseNumberStreet::class, 'house_number_id', 'id');
    }
}
