<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Http\Resources\CardResource;
use App\Models\Card;
use App\Models\Client;
use App\Models\Photo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;


class CardController extends Controller
{

    public function index(): ResourceCollection
    {
      return  CardResource::collection(Card::with(['client', 'photos', 'categories'])->paginate(9));
    }


    public function store(CardRequest $request): JsonResponse
    {
        if ((Client::where('user_id', Auth::user()->id)->get())->isEmpty()) {
            return response()->json("Нет прав", 403);
        }
            $clientId = Client::where('user_id', Auth::user()->id)->first();
            $clientId = $clientId->id;
            $card = Card::create($request->all());
            $card->client_id = $clientId;
            $card->save();
            $this->uploadPhoto($request, $card);
            return response()->json($card, 201);
    }


    public function show(Card $card): Card
    {
        return $card;
    }


    public function update(Request $request, Card $card): JsonResponse
    {
        /*if(!Gate::allows('update-card', $card)){
            abort(403);
        }*/
        $card->update($request->all());
        return response()->json($card, 200);
    }


    public function destroy(Card $card): JsonResponse
    {
        $card->delete();
        return response()->json(null, 204);
    }

    public function uploadPhoto(Request $request, Card $card): JsonResponse
    {
        $validated = Validator::make($request->all(), [
            'image*' => 'required|mimes:png,jpg,jpeg,gif,array|max:50000',
        ]);
        if ($validated->fails()) {
            return response()->json($validated->errors());
        } else {
            $names = [];
            foreach ($request->file('image') as $photo) {
                $path = $photo->store('public/upload');
                $name = $photo->getClientOriginalName();

                $save = new Photo();
                $save->width = 300;
                $save->height = 400;
                $save->card_id = $card->id;
                $save->name = $name;
                $save->path = $path;
                $save->save();
                $names[] = $name;
            }
            return response()->json([
                "success" => true,
                "message" => "Photos successfully uploaded",
                "names" => $names
            ]);
        }
    }

    public function getUserCards(Request $request): JsonResponse
    {
        $clientId = $request->input('client_id');
        $cards = Card::where('client_id', '=', $clientId)->get();
        return response()->json($cards);
    }

}
