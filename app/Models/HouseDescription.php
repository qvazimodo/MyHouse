<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HouseDescription extends Model
{
    use HasFactory;

    protected $fillable =
        [
            'house_id',
            'total_area',
            'commissioning_year',
            'service_start_date',
            'year_of_next_overhaul',
            'entrances_amount integer',
            'floors_amount',
            'apartments_amount',
        ];

    public function house():HasOne
    {
        return $this->hasOne(House::class);
    }
}
