<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\MeterValue;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

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

    public function values(): ResourceCollection
    {
        $currentClientId = auth()->user()->getAuthIdentifier();

        return MeterResource::collection(Meter::with(['client', 'monthYear'])->where('id',
            $currentClientId)->with(['monthYear'])
            ->paginate(12));

        /*        return  MeterValueResource::collection(MeterValue::with(['meterValues'])
                    ->where('client_id',$id)
                    ->paginate(10));*/
        /* return MeterResource::collection(Meter::with(['client'])
             ->where('client_id', $id)
             ->join('meter_values', 'meter_values.id', '=', 'meters.id')
             ->join('months', 'months.id', '=', 'meter_values.month_id')
             ->paginate(10)
         );*/
        // $lastValue = MeterValue::select('value')->where('parent_id');
        // dd($lastValueId);

        /*        $meters = Meter::query()
                    ->select('number',
                        'type', 'months.name as name',
                        'value', 'client_id', 'parent_id',
                        'meter_id', 'month_id', 'meter_values.id as id')
                    //->selectSub($lastValue, 'lastValue')
                    ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id')
                    ->join('months', 'months.id', '=', 'meter_values.month_id')
                    ->where('client_id', '=', $id)
                    ->get();
                //return response()->json($meters);
                return MeterResource::collection($meters);*/


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
