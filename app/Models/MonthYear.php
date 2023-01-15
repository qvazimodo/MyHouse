<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MonthYear extends Model
{
    use HasFactory;

    protected $table = 'month_year';
    protected $fillable = ['month_id', 'year_id'];
    public $timestamps = false;

    public function year(): BelongsTo
    {
        return $this->belongsTo(Year::class);
    }

    public function month(): BelongsTo
    {
        return $this->belongsTo(Month::class);
    }

    public function meterMonthYear(): HasMany
    {
        return $this->hasMany(MeterMonthYear::class);
    }

    public function meters(): BelongsToMany
    {
        return $this->belongsToMany(Meter::class, 'meter_month_year', 'month_year_id', 'meter_id', 'id');
    }
}
