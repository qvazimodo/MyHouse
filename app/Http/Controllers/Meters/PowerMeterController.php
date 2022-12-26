<?php

namespace App\Http\Controllers\Meters;

use App\Http\Controllers\Controller;
use App\Models\PowerMeter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PowerMeterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $power_meters = PowerMeter::query()
            ->select('power_meters.id as meter_id',
                'number_of_meter',
                'data_meter_last',
                'data_meter_now',
                'user_id',
                'name',
                'patronymic',
                'last_name',
                'email')
            ->join('users', 'users.id', '=', 'power_meters.user_id')
            ->get();

        return response()->json($power_meters);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $power_meter = PowerMeter::create($request->all());

        return response()->json($power_meter, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param PowerMeter $power_meter
     * @return PowerMeter
     */
    public function show(PowerMeter $power_meter): PowerMeter
    {
        return $power_meter;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param PowerMeter $power_meter
     * @return JsonResponse
     */
    public function update(Request $request, PowerMeter $power_meter): JsonResponse
    {
        $power_meter->update($request->all());
        return response()->json($power_meter, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PowerMeter $power_meter
     * @return JsonResponse
     */
    public function delete(PowerMeter $power_meter): JsonResponse
    {
        $power_meter->delete();
        return response()->json(null, 204);
    }
}
