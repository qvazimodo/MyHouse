<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class House extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['house_number_street_id', 'houses_description_id'];

    public function houseDescription(): BelongsTo
    {
        return $this->belongsTo(HouseDescription::class, 'house_descriptions_id');
    }

    public function apartments(): HasMany
    {
        return $this->hasMany(Apartment::class);
    }

    public function streets(): HasManyThrough
    {
        return $this->hasManyThrough(Street::class, Address::class, 'street_id', 'id', 'house_number_street_id', 'id');
    }

    public function housesNumbers(): HasManyThrough
    {
        return $this->hasManyThrough(HouseNumber::class, Address::class, 'house_number_id', 'id', 'house_number_street_id', 'id');
    }

    public function meters():HasMany
    {
        return $this->hasMany(Meter::class,'house_id','id');
    }
}
