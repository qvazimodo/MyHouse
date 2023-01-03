<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HouseAddress extends Model
{
    use HasFactory;

    protected $fillable = ['street_id', 'house_number_id'];
    public $timestamps = false;

    public function house_number(): BelongsTo
    {
        return $this->belongsTo(HouseNumber::class);
    }

    public function street(): BelongsTo
    {
        return $this->belongsTo(Street::class);
    }

    public function house():BelongsTo{
        return $this->belongsTo(House::class);
    }
}
