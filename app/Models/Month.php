<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Month extends Model
{
    use HasFactory;

    protected $fillable = [
        'month',
    ];

    public $timestamps = false;

    public function month(): BelongsTo
    {
        return $this->belongsTo(Meter::class, 'month');
    }
}
