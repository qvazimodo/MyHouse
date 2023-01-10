<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MeterController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();

/*        return  MeterValueResource::collection(MeterValue::with(['meterValues'])
            ->where('client_id',$id)
            ->paginate(10));*/
       /* return MeterResource::collection(Meter::with(['client'])
            ->where('client_id', $id)
            ->join('meter_values', 'meter_values.id', '=', 'meters.id')
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->paginate(10)
        );*/

        $meters = Meter::query()
            ->select('number', 'type', 'months.name as name', 'value', 'client_id','parent_id', 'meter_id','month_id')
            ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id' )
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->join('clients', 'clients.user_id', '=', 'meters.client_id')
            ->join('users', 'users.id', '=', 'clients.user_id')
            ->where('client_id', '=', $id)
            ->get();
        //return response()->json($meters);
        return MeterResource::collection($meters);



    }

    public function store(Request $request)
    {
        $id = auth()->user()->getAuthIdentifier();

        $meter_user=[
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
