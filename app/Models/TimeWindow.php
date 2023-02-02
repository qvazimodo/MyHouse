<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TimeWindow extends Model
{
    use HasFactory;
    public $fillable = ['time_window'];
    public $timestamps = false;

    public function timetable():BelongsTo
    {
        return $this->belongsTo(Timetable::class);
    }
}
