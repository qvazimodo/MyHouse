<?php

namespace App\Http\Controllers\Meters;

use App\Http\Controllers\Controller;
use App\Models\Meter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MeterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {
        $meters = Meter::query()
            ->join('clients', 'clients.user_id', '=', 'meters.user_id')
            ->get();

        return response()->json($meters);
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
    public function store(Request $request)
    {
        $meter_request = $request->all();
        $meter = new Meter();
        $meter->fill($meter_request);
        $meter->save();

        return response()->json($meter, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Meter  $meter
     * @return \Illuminate\Http\Response
     */
    public function show(Meter $meter): Meter
    {
        return $meter;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Meter  $meter
     * @return \Illuminate\Http\Response
     */
    public function edit(Meter $meter)
    {
        //
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
