<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;

use App\Models\Meter;
use App\Models\MeterValue;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MeterController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();
/*        return  MeterValueResource::collection(MeterValue::with(['meterValues'])
            ->where('client_id',$id)
            ->paginate(10));*/
        return MeterResource::collection(Meter::with('meterValues')
            ->where('client_id',$id)
            ->paginate(10));
    }
}
