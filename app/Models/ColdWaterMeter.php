<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColdWaterMeter extends Model
{
    use HasFactory;

    protected $fillable = [
        'number_of_meter',
        'user_id',
        'data_meter_last',
        'data_meter_now',
    ];

}
