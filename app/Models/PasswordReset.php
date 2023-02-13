<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;

    protected $table = 'password_resets';
    protected $fillable = [
        'email',
        'code',
        'created_at',
    ];


    public function isExpire():void
    {
        if ($this->created_at > now()->addHour()) {
            $this->delete();
        }
    }
}
