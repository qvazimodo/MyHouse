<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\MeterValue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MeterValueController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();

        $meters = Meter::query()
            ->select('number', 'type', 'months.name as month', 'value', 'client_id','parent_id', 'meter_id')
            ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id' )
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->join('clients', 'clients.user_id', '=', 'meters.client_id')
            ->join('users', 'users.id', '=', 'clients.user_id')
            ->with("clientUser:name,patronymic,last_name")
            ->where('client_id', '=', $id)
            ->get();


        return MeterResource::collection($meters->paginate(10));
    }

    public function store(Request $request)
    {
        $meter_id = Meter::query()
            ->where('number','=',$request->number)
            ->where('client_id','=',$request->user_id)
            ->first()->toArray();
        $parent_id = MeterValue::query()
            ->where('meter_id','=',$meter_id['id'])
            ->where('month_id','=',intval($request->month))
            ->orderByDesc('id')
            ->limit(1)
            ->first()->toArray();
        //dd($parent_id['id']);
        $meter_user=['meter_id' => $meter_id['id'],
            'month_id' => intval($request->month),
            'parent_id' => $parent_id['id'],
            'value' => intval($request->value)

        ];
        $meter = new MeterValue();
        $meter->fill($meter_user);
        $meter->save();

        return response()->json($meter, 201);
    }
}
