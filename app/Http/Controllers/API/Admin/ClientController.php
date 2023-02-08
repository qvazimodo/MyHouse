<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use App\Models\Client;
use App\Models\Street;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JSONResponse
     */
    public function index(): JsonResponse
    {
/*        $clients = Client::join('users', 'users.id', '=', 'clients.user_id')
            ->join('apartments', 'apartments.id', '=', 'clients.apartment_id')
            ->join('houses', 'houses.id', '=', 'apartments.house_id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->join('streets', 'house_number_street.street_id', '=', 'streets.id')
            ->join('house_numbers', 'house_number_street.house_number_id', '=', 'house_numbers.id')
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
                'entrance', 'floor',
                'streets.id as street_id',
                'streets.name as street_name',
                'house_numbers.id as house_number_id',
                'house_numbers.value as house_number'
            )
            ->get();*/

        $street = Street::query()->with('houseNumbers')->get();

        return response()->json([
            'data' => $street,
            'status' => 'ok'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $input = $request->all();
        $userId = $input['userId'];
        $apartmentId = $input['apartmentId'];


        $user = User::where('id', $userId)->first();
        $user['name'] = $input['name'];
        $user['patronymic'] = $input['patronymic'];
        $user['last_name'] = $input['lastName'];
        $user['phone'] = $input['phone'];
        $user['email'] = $input['email'];
//        $user['birth_date'] = $input['birthDate '];
        $user->save();

        $apartment = Apartment::where('id', $apartmentId)->first();
        $apartment['entrance'] = $input['entrance'];
        $apartment['floor'] = $input['floor'];
        $apartment['number'] = $input['apartmentNumber'];
        $apartment->save();

        return response()->json([
            'status' => 'ok',
            "message" => "Профиль клиента обновлён успешно!",
        ], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */

    public function destroy(Client $client): JsonResponse
    {
        $client->delete();
        return response()->json(['status' => 'ok'], 204);
    }

    public function getClientsByAddress($streetId, $houseNumberId): JsonResponse
    {
        $clients = Client::join('users', 'users.id', '=', 'clients.user_id')
            ->join('apartments', 'apartments.id', '=', 'clients.apartment_id')
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
            ->get();

        return response()->json([
            'data' => $clients,
            'status' => 'ok'
        ], 200);
    }

    public function getNewClients()
    {
//        $notEmployees = DB::table('users')
//            ->join('clients', 'users.id', '=', 'clients.user_id')
//            ->leftJoin('employees', 'users.id', '=', 'employees.user_id')
//            ->where('clients.user_id', '=', null)
//            ->where('employees.user_id', '=', null);
//            ->select('users.id as id')


//        $new = DB::table('users')
//            ->leftJoinSub($notEmployees, 'notEmployees', function ($join) {
//                $join->on('users.id', '=', 'notEmployees.id');
//            })->get();
        $new=DB::table('users')
            ->leftJoin('clients', 'users.id', '=', 'clients.user_id')
            ->where('clients.user_id', '=', null)
//            ->union($notEmployees)
            ->get();

        return response()->json([
            'data' => $new,
            'status' => 'ok'
        ], 200);
    }
}
