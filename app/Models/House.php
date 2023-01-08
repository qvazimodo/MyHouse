<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class House extends Model
{
    use HasFactory;

    protected $fillable = ['house_address_id', 'houses_description_id'];

    public function houseAddress(): HasOne
    {
        return $this->hasOne(HouseAddress::class, 'id');
    }

    public function houseDescription(): HasOne
    {
        return $this->hasOne(HouseDescription::class, 'id');
    }

    public function apartment(): HasOne
    {
        return $this->hasOne(Apartment::class);
    }

    public function street():HasOneThrough
    {
        return $this->hasOneThrough(Street::class, HouseAddress::class, 'street_id','id','house_address_id', 'id');
    }

    public function houseNumber():HasOneThrough
    {
        return $this->hasOneThrough(HouseNumber::class, HouseAddress::class, 'house_number_id', 'id', 'house_address_id', 'id');
    }

}
