<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Street extends Model
{
    use HasFactory;

    protected $fillable=['name'];
    public $timestamps = false;

    public function house_addresses():HasMany
    {
        return $this->hasMany(HouseAddress::class, 'street_id', 'id');
    }
}
