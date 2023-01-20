<?php

namespace App\Http\Controllers;

use App\Mail\MailNotify;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function send(): JsonResponse
    {
        try {
            Mail::to('kostyapetrov12rus@gmail.com')->send(new MailNotify());
            return response()->json( ["success"],200);
       } catch (Exception $exception) {
            return response()->json(["error"]);

        }
    }
}
