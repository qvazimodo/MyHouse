<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CardController extends Controller
{

    public function index(): JsonResponse
    {
        $cards = Card::all();
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
}
