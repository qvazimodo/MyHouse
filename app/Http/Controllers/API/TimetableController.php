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
    protected TimetableService $timetableService;
    protected TimetableRepository $timetableRepository;

    public function __construct(TimetableService $timetableService, TimetableRepository $timetableRepository)
    {
        $this->timetableService = $timetableService;
        $this->timetableRepository = $timetableRepository;
    }

    public function index(): Collection
    {
        return Timetable::all();
    }

    public function store(Request $request)
    {

        $timetable = Timetable::create([
            'date' => $this->timetableService->convertDate($request->get('date')),
            'client_id' => $this->timetableService->getClientId(),
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

    public function checkFreeTime(Request $request): JsonResponse
    {
        $date = $request->get('date');
        $checkDate = $this->timetableService->checkDate($date);
        $mysqlDate = $this->timetableService->convertDate($date);

        if($checkDate["flag"]){
            return response()->json(['message:' . $checkDate["message"]]);
        }
        $result = $this->timetableRepository->getFreeTimeEmployeeById($request->profession, $mysqlDate);
        return response()->json($result, 200);
    }
}
