<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Street extends Model
{
    use HasFactory;

    protected $fillable=['name'];
    public $timestamps = false;

    public function houseNumberStreets():HasMany
    {
        return $this->hasMany(HouseNumberStreet::class, 'street_id', 'id');
    }

    public function houseNumbers():BelongsToMany
    {
        return $this->belongsToMany(HouseNumber::class);
    }
}
