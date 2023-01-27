<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
