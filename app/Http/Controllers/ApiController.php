<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    public function jsonResponse($data = null, $messages = null, $code = 200)
    {
        $array = [
            'data'  => $data,
            'message'  => $messages,
            'status'  => in_array($code, $this->codeHTTP()),
        ];
        return response($array, $code);
    }

    public function codeHTTP(): array
    {
        return ['200', '201', '202'];
    }
}
