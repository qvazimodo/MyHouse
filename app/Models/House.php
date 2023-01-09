<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class House extends Model
{
    use HasFactory;

    protected $fillable = ['house_number_street_id', 'houses_description_id'];

    public function houseAddresses(): BelongsTo
    {
        return $this->belongsTo(HouseNumberStreet::class, 'house_address_id');
    }

    public function houseDescription(): BelongsTo
    {
        return $this->belongsTo(HouseDescription::class, 'house_descriptions_id');
    }

    public function apartments(): HasMany
    {
        return $this->hasMany(Apartment::class);
    }

    public function street():HasOneThrough
    {
        return $this->hasOneThrough(Street::class, HouseNumberStreet::class, 'street_id','id','house_address_id', 'id');
    }

    public function houseNumber():HasOneThrough
    {
        return $this->hasOneThrough(HouseNumber::class, HouseNumberStreet::class, 'house_number_id', 'id', 'house_address_id', 'id');
    }

}
