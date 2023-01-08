<?php

namespace App\Enums;

enum MonthEnum: int
{
    case  January = 1;
    case  February = 2;
    case  March = 3;
    case  April = 4;
    case  May = 5;
    case  June = 6;
    case  July = 7;
    case  August = 8;
    case  September = 9;
    case  October = 10;
    case  November = 11;
    case  December = 12;

    public function label(): string
    {
        return match ($this) {
            static::January => 'январь',
            static::February => 'февраль',
            static::March => 'март',
            static::April => 'апрель',
            static::May => 'май',
            static::June => 'июнь',
            static::July => 'июль',
            static::August => 'август',
            static::September => 'сентябрь',
            static::October => 'октябрь',
            static::November => 'ноябрь',
            static::December => 'декабрь',

        };
    }
}

