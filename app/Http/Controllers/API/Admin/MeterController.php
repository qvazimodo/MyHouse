<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\Month;
use App\Models\Year;
use Illuminate\Http\JsonResponse;

class MeterController extends Controller
{
    public function index()
    {
        return MeterResource::collection(Meter::all());
    }

    public function allMetersValues(): JsonResponse
    {
        $metersValues = Meter::with(['client', 'monthYear', 'clientUser'])->paginate(5);


        $years = Year::all();
        $months = Month::all();

        return response()->json([
            'data' => $metersValues,
            'meta' => ['years' => $years, 'months' => $months]
        ], 200);
    }
}
