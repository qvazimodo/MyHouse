<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\HouseCollection;
use App\Http\Resources\StreetResource;
use App\Models\House;
use App\Models\Street;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class HouseController extends Controller
{
    public function index():JsonResponse
    {
        $houses =  House:: with('houseDescription')
            ->join('house_number_street','houses.house_number_street_id', '=', 'house_number_street.id' )
            ->get();

        return response()->json(['status'=>'ok', 'houses'=>new HouseCollection($houses)], 200);
    }

    public function show($street_id, $house_number_id):JsonResponse
    {
        $house =  House:: with('houseDescription')
            ->join('house_number_street','houses.house_number_street_id', '=', 'house_number_street.id' )
            ->where('house_number_street.street_id', $street_id)
            ->where('house_number_street.house_number_id', $house_number_id)
            ->get();

        return response()->json(['status'=>'ok', 'data'=>$house], 200);
    }

}
