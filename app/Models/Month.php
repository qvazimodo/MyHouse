<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Month extends Model
{
    use HasFactory;

    protected $fillable = ['name',];
    public $timestamps = false;

    public function meterValues(): HasMany
    {
        return $this->hasMany(MeterValue::class);
    }

    public function monthYear(): HasMany
    {
        return $this->hasMany(MonthYear::class);
    }

    public function years(): BelongsToMany
    {
        return $this->belongsToMany(Year::class);
    }
}
