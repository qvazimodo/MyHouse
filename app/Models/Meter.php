<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meter extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'previous_record_number',
        'value',
        'date',
        'user_id',
        'type',
        'month'
    ];

    public $timestamps = false;

    public function previous()
    {
        return $this->belongsTo(Meter::class);
    }

    public function next()
    {
        return $this->belongsTo(Meter::class);
    }
}
