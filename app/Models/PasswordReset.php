<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'password_resets';
    protected $fillable = [
        'email',
        'code',
        'created_at',
    ];


    /**
     * check if the code is expire then delete
     *
     * @return void
     */
    public function isExpire()
    {
        if ($this->created_at > now()->addHour()) {
            $this->delete();
        }
    }
}
