<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Timetable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TimetableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Timetable::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $date = explode('.', $request->get('date'), 3);
        $response = Http::get("https://isdayoff.ru/api/getdata?year=" . $date[2] . '&month='. $date[1] . '&day='. $date[0]);
        if($response->body()){
            return response()->json("message: Выходной день");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
