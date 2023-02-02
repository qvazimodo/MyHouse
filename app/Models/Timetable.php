<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Timetable extends Model
{
    use HasFactory;

    public $fillable =
        [
            'client_id',
            'employer_id',
            'date',
            'time_window_id'
        ];

    public function timeWindow(): HasOne
    {
        return $this->hasOne(TimeWindow::class);
    }

    public function employee():HasOne
    {
        return $this->hasOne(Employee::class);
    }

    public function client():HasOne
    {
        return $this->hasOne(Client::class);
    }

}
