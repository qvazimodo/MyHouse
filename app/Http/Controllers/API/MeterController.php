<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Client;
use App\Models\Meter;
use App\Models\MeterValue;
use App\Models\Month;
use App\Models\Year;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MeterController extends Controller
{
    public function index()
    {
        $id = auth()->user()->getAuthIdentifier();

        $meters = Meter::query()->select('type', 'number')->where('client_id', $id)->get();
//        return collect($meters)->groupBy('type');
        $metersCollection = collect($meters)->groupBy('type');


        return response()->json(['status' => 'ok', 'data' => $metersCollection], 200);
    }

    public function clientMetersValues():JsonResponse
    {
        $currentClientId = auth()->user()->getAuthIdentifier();

        $metersValues = Meter::with(['client', 'meterMonthYear'])->where('client_id',
            $currentClientId)->paginate(2);

        $years = Year::all();
        $months = Month::all();
        $client = Client::with('user')->where('id', $currentClientId)->get();

        return response()->json([
            'data' => $metersValues,
            'meta' => ['client' => $client, 'years' => $years, 'months' => $months]
        ], 200);
    }

    public function store(Request $request)
    {
        $id = auth()->user()->getAuthIdentifier();

        $meter_user = [
            'client_id' => $id,
            'type' => $request->type,
            'number' => intval($request->number),
        ];

        //dd($meter_user);

        $meter = new Meter();
        $meter->fill($meter_user);
        $meter->save();

        return response()->json($meter, 201);

    }
}
