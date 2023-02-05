<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Timetable;
use App\Repositories\TimetableRepository;
use App\Services\TimetableService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TimetableController extends Controller
{
    public function index(): Collection
    {
        return Timetable::all();
    }

    public function store()
    {

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
