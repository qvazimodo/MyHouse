<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientAnnouncementResource;
use App\Models\Card;
use App\Models\Client;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;

class ClientAnnouncementController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();
        $currentClient = Client::where('user_id', '=', Auth::user()->id)->first();
        return  ClientAnnouncementResource::collection(Card::where('client_id',$currentClient->id)
            ->with(['photos'])
            ->paginate(2));
    }
}
