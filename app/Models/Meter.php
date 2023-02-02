<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

    public function meterMonthYear(): HasMany
    {
        return $this->hasMany(MeterMonthYear::class);
    }

    //using(<имя класса связующей модели>)
    //данный метод позволяет к результату присоединить данные из связующей таблицы
    public function monthYear(): BelongsToMany
    {
        return $this->belongsToMany(MonthYear::class, 'meter_month_year', 'meter_id', 'month_year_id', 'id')
            ->as('meter_reading')
            ->withPivot(['value', 'parent_id'])
 ;
    }
}
