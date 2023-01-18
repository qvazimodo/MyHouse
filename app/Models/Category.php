<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['mame'];

    public function cardCategory(): HasMany
    {
        return $this->hasMany(CardCategory::class);
    }

    public function cards():BelongsToMany
    {
        return $this->belongsToMany(Card::class);
    }
}
