<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
