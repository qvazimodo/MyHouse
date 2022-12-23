<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ColdWaterMeterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [
            'number_of_meter' => 'required|numeric',
            'user_id' => 'required|numeric',
            'data_meter_last' => 'required|numeric',
            'data_meter_now' => 'required|numeric',
        ];

    }
}
