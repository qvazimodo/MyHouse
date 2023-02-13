<?php

namespace App\Http\Controllers\Meters;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\MeterValue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;

class MeterController extends Controller
{


    public function index(): ResourceCollection
    {


        $meters =  Meter::query()
            ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id' )
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->with("clientUser:name,patronymic,last_name")
            ->get(['meter_id','client_id','type','number','parent_id','months.name as month ']);
        return MeterResource::collection($meters);
    }

    /**
     * @return JsonResponse
     */
    public function showAuthClient(): JsonResponse
    {
       // $meters_last = MeterValue::query()

        $meters = Meter::query()
            ->select('number', 'type', 'months.name as month', 'value', 'client_id','parent_id', 'meter_id','month_id')
            ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id' )
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->join('clients', 'clients.user_id', '=', 'meters.client_id')
            ->join('users', 'users.id', '=', 'clients.user_id')
            ->with("clientUser:name,patronymic,last_name")
            ->where('client_id', '=', Auth::id())
            ->get();
         return response()->json($meters);
        //return MeterResource::collection($meters);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    /*  public function store(Request $request)
      {
          $meter_request = $request->all();

          $meter = new Meter();
          $meter->fill($meter_request);
          $meter->save();

          return response()->json($meter, 201);
      }*/

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
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

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Meter $meter
     * @return JsonResource
     */
    public function show(Meter $meter): JsonResource
    {


        return new MeterResource($meter);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Meter  $meter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Meter $meter): JsonResponse
    {
        $meter->update($request->all());
        return response()->json($meter, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Meter  $meter
     * @return \Illuminate\Http\Response
     */
    public function delete(Meter $meter): JsonResponse
    {
        $meter->delete();
        return response()->json(null, 204);
    }
}
