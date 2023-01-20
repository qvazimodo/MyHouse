<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\HouseResource;
use App\Models\House;
use Illuminate\Http\Resources\Json\ResourceCollection;

class HouseController extends Controller
{
    public function index(): ResourceCollection
    {
        return HouseResource::collection(House::with('houseDescription', 'apartments')
            ->join('house_number_street', 'house_number_street.id', '=', 'houses.house_number_street_id')
            ->join('streets', 'streets.id', '=', 'house_number_street.street_id')
            ->join('house_numbers', 'house_numbers.id', '=', 'house_number_street.house_number_id')
            ->paginate(5));
    }
}
