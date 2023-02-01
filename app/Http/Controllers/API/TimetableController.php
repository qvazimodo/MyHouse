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
use function PHPUnit\Framework\isEmpty;

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
     * @return int[]
     */
    public function store(Request $request)
    {
        $timeWindows = [1, 2, 3, 4,];
        $date = strtotime($request->get('date'));
        $mysqldate = date('Y-m-d', $date);
        $date = explode('.', $request->get('date'), 3);
        $response = Http::get("https://isdayoff.ru/api/getdata?year=" . $date[2] . '&month=' . $date[1] . '&day=' . $date[0]);
        $id = Auth::user()->id;
        if ($response->body()) {
            return response()->json(["message: Выходной день", $id]);
        }
        $clientsAddressIds = Client::where('user_id', '=', $id)
            ->join('apartments', 'apartments.id', '=', 'clients.apartment_id')
            ->join('houses', 'apartments.house_id', '=', 'houses.id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->join('house_numbers', 'house_number_street.house_number_id', '=', 'house_numbers.id')
            ->join('streets', 'house_number_street.street_id', '=', 'streets.id')
            ->select(
                'house_numbers.id as house_id',
                'streets.id as street_id'
            )
            ->get()
            ->toArray();
        $clientsAddressIds = $clientsAddressIds[0];
        $employeeObjectIds = Employee::where('held_position', '=', $request->proffesion)
            ->join('employee_serviced_address', 'employees.id', '=', 'employee_serviced_address.employee_id')
            ->join('house_number_street', 'employee_serviced_address.house_number_street_id', '=', 'house_number_street.id')
            ->where('house_number_street.street_id', '=', $clientsAddressIds["street_id"])
            ->where('house_number_street.house_number_id', '=', $clientsAddressIds["house_id"])
            ->get()
            ->toArray();
        foreach (Timetable::where('date', $mysqldate)->get()->toArray() as $item){
            if(isEmpty($item)){
                return $timeWindows;
            }

        };
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
