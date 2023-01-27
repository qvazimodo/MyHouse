<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\MeterMonthYear;
use App\Models\MonthYear;
use App\Models\Year;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MeterValueController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();

        $meters = Meter::query()
            ->select('number', 'type', 'months.name as month', 'value', 'client_id','parent_id', 'meter_id')
            ->join('meter_values', 'meter_values.meter_id', '=', 'meters.id' )
            ->join('months', 'months.id', '=', 'meter_values.month_id')
            ->join('clients', 'clients.user_id', '=', 'meters.client_id')
            ->join('users', 'users.id', '=', 'clients.user_id')
            ->with("clientUser:name,patronymic,last_name")
            ->where('client_id', '=', $id)
            ->get();


        return MeterResource::collection($meters->paginate(10));
    }

    public function store(Request $request)
    {
        $meter_id = Meter::query()
            ->where('number','=',$request->number)
            ->where('client_id','=',$request->user_id)
            ->first()->toArray();
        $year = Year::firstOrCreate([
            'number' => intval(date('Y'))
        ]);
        $month_year = new MonthYear;
       /* $month_year->fill([
            'month_id' => intval(date('m')),
            'year_id' => Year::query()->where('number','=',intval(date('Y')))->first()->toArray()['id']
        ])->save();*/

        $month_year->firstOrCreate([
            'month_id' => intval(date('m')),
            'year_id' => Year::query()->where('number','=',intval(date('Y')))->first()->toArray()['id']
        ]);
       $last_month_year = MonthYear::query()
           ->orderByDesc('id')
           ->limit(1)
           ->first()->toArray()['id'] - 1;
        $month_year = MonthYear::query()
                ->orderByDesc('id')
                ->limit(1)
                ->first()->toArray()['id'];
       //dd($last_month_year);
        $parent_id = MeterMonthYear::query()
            ->where('meter_id','=',$meter_id['id'])
            ->where('month_year_id','=',$last_month_year)    //'month_year_id -1'
            ->orderByDesc('id')
            ->limit(1)
            ->first()->toArray();
        //dd($parent_id['id']);
        $meter_user=['meter_id' => $meter_id['id'],
            'month_year_id' => $month_year,
            'parent_id' => $parent_id['id'],
            'value' => intval($request->value)

        ];
        $meter = new MeterMonthYear();
        $meter->fill($meter_user);
        $meter->save();

        return response()->json($meter, 201);
    }
}
