<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\HotWaterMeter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HotWaterMeterController extends Controller
{
    public function index(): JsonResponse
    {
        $hot_meters = HotWaterMeter::query()
            ->select('hot_water_meters.id as meter_id',
                             'number_of_meter',
                             'data_meter_last',
                             'data_meter_now',
                             'user_id',
                             'name',
                             'patronymic',
                             'last_name',
                             'email')
            ->join('users', 'users.id', '=', 'hot_water_meters.user_id')
            ->get();

        return response()->json($hot_meters);
    }


    public function store(Request $request): JsonResponse
    {
        $hot_meter = HotWaterMeter::create($request->all());
        return response()->json($hot_meter, 201);
    }


    public function show(HotWaterMeter $hot_meter): HotWaterMeter
    {
        return $hot_meter;
    }


    public function update(Request $request, HotWaterMeter $hot_meter): JsonResponse
    {
        $hot_meter->update($request->all());
        return response()->json($hot_meter, 200);
    }


    public function delete(HotWaterMeter $hot_meter): JsonResponse
    {
        $hot_meter->delete();
        return response()->json(null, 204);
    }
}
