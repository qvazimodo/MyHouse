<?php

namespace App\Http\Controllers;

use App\Models\ColdWaterMeter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ColdWaterMeterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $cold_meters = ColdWaterMeter::query()
            ->select('cold_water_meters.id as meter_id',
                'number_of_meter',
                'data_meter_last',
                'data_meter_now',
                'user_id',
                'name',
                'patronymic',
                'last_name',
                'email')
            ->join('users', 'users.id', '=', 'cold_water_meters.user_id')
            ->get();

        return response()->json($cold_meters);
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
        $cold_meter = ColdWaterMeter::create($request->all());

        return response()->json($cold_meter, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param ColdWaterMeter $cold_meter
     * @return ColdWaterMeter
     */
    public function show(ColdWaterMeter $cold_meter): ColdWaterMeter
    {
        return $cold_meter;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param ColdWaterMeter $cold_meter
     * @return JsonResponse
     */
    public function update(Request $request, ColdWaterMeter $cold_meter): JsonResponse
    {
        $cold_meter->update($request->all());
        return response()->json($cold_meter, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ColdWaterMeter $cold_meter
     * @return JsonResponse
     */
    public function delete(ColdWaterMeter $cold_meter): JsonResponse
    {
        $cold_meter->delete();
        return response()->json(null, 204);
    }
}
