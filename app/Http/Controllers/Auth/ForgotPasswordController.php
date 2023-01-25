<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Models\PasswordReset;
use App\Mail\SendCodeResetPassword;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\Auth\ForgotPasswordRequest;

class ForgotPasswordController extends ApiController
{
    public function __invoke(ForgotPasswordRequest $request)
    {
        PasswordReset::where('email', $request->email)->delete();
        $codeData = PasswordReset::create($request->data());

        Mail::to($request->email)->send(new SendCodeResetPassword($codeData->code));

        return $this->jsonResponse(null, trans('passwords.sent'), 200);
    }
}
