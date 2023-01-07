<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\HouseResource;
use App\Models\House;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class HouseController extends Controller
{
    public function index(): ResourceCollection
    {
        return  HouseResource::collection(House::with('house_address')->paginate(3));
    }
}
