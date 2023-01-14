<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Year extends Model
{
    use HasFactory;

    protected $fillable = ['number'];

    public function monthYears(): HasMany
    {
        return $this->hasMany(MonthYear::class);
    }

    public function months():BelongsToMany
    {
        return $this->belongsToMany(Month::class);
    }
}
