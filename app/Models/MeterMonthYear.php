<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;
//use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;


class MeterMonthYear extends Pivot
{
    use HasFactory;
    protected $table = 'meter_month_year';
    protected $fillable = [
        'meter_id',
        'parent_id',
        'month_year_id',
        'value',
    ];

    public function parentId(): HasOne
    {
        return $this->hasOne(self::class, 'id');
    }

    public function id(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function meter(): BelongsTo
    {
        return $this->belongsTo(Meter::class);
    }

    public function monthYear():BelongsTo
    {
        return $this->belongsTo(MonthYear::class);
    }
}
