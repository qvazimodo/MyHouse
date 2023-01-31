<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Models\PasswordReset;
use Illuminate\Foundation\Auth\User;
use App\Http\Requests\Auth\ResetPasswordRequest;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends ApiController
{
    public function __invoke(ResetPasswordRequest $request)
    {
        $passwordReset = PasswordReset::firstWhere('code', Cookie::get('code'));
        if ($passwordReset->isExpire()) {
            return $this->jsonResponse(null, trans('passwords.code_is_expire'), 422);
        }
        $user = User::firstWhere('email', $passwordReset->email);
        $user->password = Hash::make($request->get('password'));
        $user->save();
        PasswordReset::where('code', Cookie::get('code'))->delete();
        return $this->jsonResponse(null, trans('site.password_has_been_successfully_reset'), 200);
    }
}
