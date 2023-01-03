<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class ClientController extends Controller
{
    public function index():View
    {
        $clients = Client::orderBy('updated_at', 'desc')->paginate(20);

        //$clients = User::query()->where('is_client', '=','1')->client();
//        $clients = User::query()
//            ->join('clients', 'users.id', '=', 'clients.user_id')
//            ->where('is_client', '=','1')
//            ->orderBy('updated_at', 'desc')
//            ->paginate(20);
        return view('client.index')->with('clients', $clients);
    }

    public function show($id):View
    {
        //$client = Client::query()->where('id', $id)->first();
        /*dd(User::query()
        ->find($id)
        ->client()->where('user_id', $id)->get());*/
        $client = Client::query()->where('user_id', $id)->first();
        $user = User::query()
            ->where('id', $id)->first();
        return view('client.show')->with([
            'client' => $client,
            'user' => $user
        ]);
    }

    public function create()
    {
        $client = new Client();
        return view('client.create')
            ->with('client', $client);
    }

    public function store(StoreClientRequest $request, Client $client)
    {
        //заполняю fillable-поля объекта данными, полученными из формы
        $client->fill($request->validated());

        $client->save();

        //перенаправление на страницу категорий
        return redirect()->route('client.index')
            ->with('clients', Client::all()->sortDesc())
            ->with('success', "Новый клиент добавлен успешно!");
    }

    public function edit(Client $client)
    {
        return view('client.create')
            ->with(
                'client', $client);
    }

    public function update(StoreClientRequest $request, Client $client)
    {
        $client->fill($request->validated());
//        $category->fill($request->all());
        $client->save();

        return redirect()->route('client.index')
            ->with('success', 'Данные клиента изменены успешно!');
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return redirect()->route('client.index')
            ->with('success', 'Данные клиента удалены успешно!');
    }

    public function isClient(): JsonResponse
    {
        if ((Client::where('user_id', Auth::user()->id)->get())->isEmpty()) {
            return response()->json(false);
        } else {
            return response()->json(true);
        }
    }
}
