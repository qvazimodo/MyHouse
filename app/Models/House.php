<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class House extends Model
{
    use HasFactory;

    protected $fillable = ['house_address_id', 'houses_description_id'];

    public function house_address(): HasOne
    {
        return $this->hasOne(HouseAddress::class, 'id');
    }

    public function house_description(): HasOne
    {
        return $this->hasOne(HouseDescription::class);
    }

    public function apartment(): HasOne
    {
        return $this->hasOne(Apartment::class);
    }

}
