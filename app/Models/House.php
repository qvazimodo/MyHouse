<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

}
