<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Address extends Model
{
    use HasFactory;

    protected $table = 'addresses';
    protected $fillable = ['street_id', 'house_number_id'];
    public $timestamps = false;


    public function street(): BelongsToMany
    {
        return $this->belongsToMany(Street::class, 'id','street_id');
    }

    public function houseNumber(): BelongsToMany
    {
        return $this->belongsToMany(HouseNumber::class, 'id', 'house_number_id');
    }
//////////////////////
    public function employees():BelongsToMany{
        return $this->belongsToMany(Employee::class, 'employee_serviced_address', 'house_number_street_id', 'employee_id', 'id');
    }
}
