<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Meter extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'type',
        'number',
    ];

    public $timestamps = false;

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function clientUser(): HasOneThrough
    {
        return $this->hasOneThrough(
            User::class,
            Client::class,
        'id',
        'id',
        'client_id',
        'user_id'
        );
    }



    public function meterValue():HasMany
    {
        return $this->hasMany(MeterValue::class);
    }
}
