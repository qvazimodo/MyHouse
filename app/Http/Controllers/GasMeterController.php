<?php

namespace App\Http\Controllers;

use App\Models\GasMeter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GasMeterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $gas_meters = GasMeter::query()
            ->select('gas_meters.id as meter_id',
                'number_of_meter',
                'data_meter_last',
                'data_meter_now',
                'user_id',
                'name',
                'patronymic',
                'last_name',
                'email')
            ->join('users', 'users.id', '=', 'gas_meters.user_id')
            ->get();

        return response()->json($gas_meters);
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
        $gas_meter = GasMeter::create($request->all());

        return response()->json($gas_meter, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param GasMeter $gas_meter
     * @return GasMeter
     */
    public function show(GasMeter $gas_meter): GasMeter
    {
        return $gas_meter;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param GasMeter $gas_meter
     * @return JsonResponse
     */
    public function update(Request $request, GasMeter $gas_meter): JsonResponse
    {
        $gas_meter->update($request->all());
        return response()->json($gas_meter, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param GasMeter $gas_meter
     * @return JsonResponse
     */
    public function delete(GasMeter $gas_meter): JsonResponse
    {
        $gas_meter->delete();
        return response()->json(null, 204);
    }
}
