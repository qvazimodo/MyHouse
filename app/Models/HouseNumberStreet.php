<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HouseNumberStreet extends Model
{
    use HasFactory;

    protected $table = 'house_number_street';
    protected $fillable = ['street_id', 'house_number_id'];
    public $timestamps = false;

    public function houseNumber(): BelongsTo
    {
        return $this->belongsTo(HouseNumber::class, 'id', 'house_number_id');
    }

    public function street(): BelongsTo
    {
        return $this->belongsTo(Street::class, 'id','street_id');
    }

    public function house(): HasOne
    {
        return $this->hasOne(House::class);
    }

    public function employees():BelongsToMany{
        return $this->belongsToMany(Employee::class, 'employee_serviced_address', 'house_number_street_id', 'employee_id', 'id');
    }
}
