<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Timetable;
use App\Models\TimeWindow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $date = strtotime($request->get('date'));
        //$mysqldate = date('Y-m-d', $date);
        $date = explode('.', $request->get('date'), 3);
        $response = Http::get("https://isdayoff.ru/api/getdata?year=" . $date[2] . '&month=' . $date[1] . '&day=' . $date[0]);
        $id = Auth::user()->id;
        if ($response->body()) {
            return response()->json(["message: Выходной день", $id]);
        }
        //dd(Apartment::addSelect('house_id')->where('apartment_id', Client::select('apartment_id')->where('user_id', $id))->get());
        dd(Apartment::select([('apartment_id')=> Client::select('apartment_id')->where('user_id', $id)])->first('house_id'));
        /*$clientHouseId = Client::join('users', 'users.id','=', 'clients.user_id')
            ->join('apartments','apartments.id','=','clients.apartment_id')
            ->join('houses', 'houses.id', '=', 'apartments.house_id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->where('house_number_street.street_id', $streetId)
            ->where('house_number_street.house_number_id', $houseNumberId)
            ->select(
                'users.id as user_id',
                'users.name as client_name',
                'users.birth_date as client_birth_date',
                'users.phone as client_phone',
                'users.email as client_email',
                'users.patronymic as client_patronymic',
                'users.last_name as client.last_name',
                'clients.id as client_id', 'apartment_id',
                'number as apartment_number',
                'entrance', 'floor')
            ->get();*/
        /*$employeeId =
            Employee::
            where('held_position', $request->proffesion)
                ->get('id');

        $timetable =
            dd(Timetable::
            where('date', $mysqldate)
                ->whereIn('employer_id',
                    Employee::
                    where('held_position', $request->proffesion)
                        ->get('id'))
                ->get('id'));*/
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function destroy($id)
    {
        //
    }
}
