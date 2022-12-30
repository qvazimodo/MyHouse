<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Client;
use App\Models\Photo;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CardController extends Controller
{

    public function index(): JsonResponse
    {
        $cards = User::with('card')->get();

        return response()->json($cards);
    }


    public function store(Request $request): JsonResponse
    {
        $card = Card::create($request->all());
        return response()->json($card, 201);
    }


    public function show(Card $card): Card
    {
        return $card;
    }


    public function update(Request $request, Card $card): JsonResponse
    {
        $card->update($request->all());
        return response()->json($card, 200);
    }


    public function delete(Card $card): JsonResponse
    {
        $card->delete();
        return response()->json(null, 204);
    }

    public function uploadPhoto(Request $request): JsonResponse
    {
        $validated = Validator::make($request->all(), [
            'image*' => 'required|mimes:png,jpg,jpeg,gif,array|max:50000',
            'id' => 'required: int'
        ]);
        if ($validated->fails()) {
            return response()->json($validated->errors());
        } else {
            $cardId = $request->input('id');
            $names = [];
            foreach ($request->file('image') as $photo) {
                $path = $photo->store('public/upload');
                $name = $photo->getClientOriginalName();

                $save = new Photo();
                $save->card_id = $cardId;
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

    public function getUserCards(Request $request)
    {
        $userId = $request->input('userID');
        $cards = Card::where('user_id', '=',  $userId)->get();
        return response()->json($cards);
    }
}
