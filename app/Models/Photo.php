<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Photo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'card_id',
        'name',
        'path',
        'thumbnail_path',
        'width',
        'height',

    ];

    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
}
