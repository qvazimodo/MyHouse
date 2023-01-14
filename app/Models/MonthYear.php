<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MonthYear extends Model
{
    use HasFactory;

    protected $fillable = ['month_id', 'year_id'];

    public function year():BelongsTo
    {
        return $this->belongsTo(Year::class);
    }

    public function month():BelongsTo
    {
        return $this->belongsTo(Month::class);
    }

    public function meterValue():HasOne
    {
        return $this->hasOne(MeterValue::class);
    }
}
