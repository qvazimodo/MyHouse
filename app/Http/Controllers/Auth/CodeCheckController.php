<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\ApiController;
use App\Models\PasswordReset;
use App\Http\Requests\Auth\CodeCheckRequest;


class CodeCheckController extends ApiController
{
    public function __invoke(CodeCheckRequest $request)
    {

        // find the code
        $passwordReset = PasswordReset::firstWhere('code', $request->code);

        // check if it does not expired: the time is one hour
        if ($passwordReset->isExpire()) {
            return $this->jsonResponse(null, trans('passwords.code_is_expire'), 422);
        }

        return $this->jsonResponse(['code' => $passwordReset->code], trans('passwords.code_is_valid'), 200)/*->cookie($request->code)*/;
    }
}
