<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Apartment extends Model
{
    use HasFactory;

    protected $fillable = ['house_id', 'entrance', 'floor', 'number'];

    public function house(): BelongsTo
    {
        return $this->belongsTo(House::class);
    }

    public function client(): HasOne
    {
        return $this->hasOne(Client::class);
    }
}
