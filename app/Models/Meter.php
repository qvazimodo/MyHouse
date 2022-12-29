<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meter extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'user_id',
        'month',
        'number',
        'value',
        'date',
        'type',
    ];

    public $timestamps = false;

    public function next()
    {
        return $this->hasOne(self::class, 'parent_id');
    }

    public function previous()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }


}
