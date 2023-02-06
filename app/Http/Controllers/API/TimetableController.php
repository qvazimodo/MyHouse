<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Timetable;
use App\Repositories\TimetableRepository;
use App\Services\TimetableService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimetableController extends Controller
{
    public function index(): Collection
    {
        return Timetable::all();
    }

    public function store(Request $request, TimetableService $timetableService)
    {
        $clientId = Client::where('user_id', Auth::user()->id)->first();
        $clientId = $clientId->id;

        $timetable = Timetable::create([
            'date' => $timetableService->convertDate($request->get('date')),
            'client_id' => $clientId,
            'employer_id' => $request->get('employer_id'),
            'time_window_id' => $request->get('time_window_id')
        ]);

        $timetable->save();
        return response()->json("$timetable", 200);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function checkFreeTime(Request $request, TimetableService $timetableService, TimetableRepository $timetableRepository): JsonResponse
    {
        $date = $request->get('date');
        $checkDate = $timetableService->checkDate($date);
        $mysqlDate = $timetableService->convertDate($date);

        if($checkDate["flag"]){
            return response()->json(['message:' . $checkDate["message"]]);
        }
        $result = $timetableRepository->getFreeTimeEmployeeById($request->profession, $mysqlDate);
        return response()->json($result, 200);
    }
}
