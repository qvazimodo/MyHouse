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

    public function houseAddresses():HasMany{
        return $this->hasMany(HouseAddress::class, 'house_number_id', 'id');
    }
}
