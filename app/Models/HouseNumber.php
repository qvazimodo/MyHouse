<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HouseNumber extends Model
{
    use HasFactory;

    protected $fillable = ['value'];
    public $timestamps = false;

    public function addresses():HasMany{
        return $this->hasMany(Address::class, 'house_number_id', 'id');
    }

    public function streets():BelongsToMany
    {
        return $this->belongsToMany(Street::class);
    }
}
