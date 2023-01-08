<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientAnnouncementResource;
use App\Models\Card;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ClientAnnouncementController extends Controller
{
    public function index(): ResourceCollection
    {
        $id = auth()->user()->getAuthIdentifier();
        return  ClientAnnouncementResource::collection(Card::where('client_id',$id)
            ->with(['photos'])
            ->paginate(2));
    }
}
