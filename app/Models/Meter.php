<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function parentId()
    {
        return $this->hasOne(self::class, 'id');
    }

    public function id()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function month():BelongsTo
    {
        return $this->belongsTo(Month::class, 'id');
    }

}
