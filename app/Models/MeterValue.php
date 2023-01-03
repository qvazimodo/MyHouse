<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MeterValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'meter_id',
        'parent_id',
        'month_id',
        'value',
    ];

    public function meter(): BelongsTo
    {
        return $this->belongsTo(Meter::class);
    }

    public function parentId(): HasOne
    {
        return $this->hasOne(self::class, 'id');
    }

    public function id(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function month(): BelongsTo
    {
        return $this->belongsTo(Month::class);
    }
}
