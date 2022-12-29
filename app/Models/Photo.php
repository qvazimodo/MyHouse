<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
        'thumbnail_path',
        'width',
        'height',
        'card_id'
    ];

    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
}
