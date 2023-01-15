<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MeterMonthYear extends Model
{
    use HasFactory;

    protected $fillable = [
        'meter_id',
        'parent_id',
        'month_year_id',
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

    public function monthYear():BelongsTo
    {
        return $this->belongsTo(MonthYear::class);
    }
}
