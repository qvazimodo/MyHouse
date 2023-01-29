<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Apartment;
use App\Models\Client;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
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
        $apartment['entrance']= $input['entrance'];
        $apartment['floor']= $input['floor'];
        $apartment['number']= $input['apartmentNumber'];
        $apartment->save();


//        dump($$request);
//        dd($client);

/*        if ((Client::where('user_id', Auth::user()->id)->get())->isEmpty()) {
            return response()->json("Нет прав", 403);
        }*/

//        $clientId = Client::where('user_id', Auth::user()->id)->first();
//        $clientId = $clientId->id;
//        $card = Card::create($request->all());
//        $card->client_id = $clientId;
//        $card->save();
//        $photo = JsonResponse::class;
//        if ($request->file()) {
//            $photo = $this->uploadPhoto($request, $card);
//        }

        return response()->json([
            'status' => 'ok',
            "message" => "Профиль клиента обновлён успешно!",
        ], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getClientsByAddress($streetId, $houseNumberId): JsonResponse
    {
        $clients = Client::join('users', 'users.id','=', 'clients.user_id')
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
            ->get();

        /*        $clients = HouseNumberStreet::query()
                    ->select()
                    ->where('street_id', $streetId)
                    ->where('house_number_id', $houseNumberId)
                    ->join('houses','house_number_street.id','=','house_number_street_id')
                    ->join('house_number_street', 'house_number_street_id', '=', 'id')
                    ->join('streets', 'street_id', '=', 'id')
                    ->join('house_numbers', 'house_number_id', '=', 'id')
                    ->get()*/


        return response()->json([
            'data' => $clients,
            'status' => 'ok'
        ], 200);
    }
}
