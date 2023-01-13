<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Hash;

class EmployeeAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection
     */
    public function index(): ResourceCollection
    {
//        return response()->json(Employee::select("id","user_id","held_position")->with('user:id,name,patronymic,last_name')->get());
        return EmployeeResource::collection(
            Employee::select("id", "user_id", "held_position")->with('user:id,name,patronymic,last_name,birth_date')->paginate(3)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {
        $randomPassword = bin2hex(openssl_random_pseudo_bytes(4));
        $carbonInstance = new Carbon($request['birthDate']);
        $birthDate = $carbonInstance->toDateTimeString();
        $user = User::create([
            'name' => $request['name'],
            'patronymic' => $request['patronymic'],
            'last_name' => $request['lastName'],
            'birth_date' => $birthDate,
            'phone' => !empty($request['phone']) ? $request['phone'] : '',
            'email' => !empty($request['email']) ? $request['email'] : '',

            'password' => Hash::make($randomPassword),
        ]);
        $user->employee()->create(['held_position' => $request['heldPosition']]);

        return response()->json(
            ['status' => 'ok',
                'message' => 'Учётная запись сотрудника успешно создана'],
            201);
//        Employee::create($request->all());
//        return response()->json($request, 201);
//        Employee::firstOrCreate()
//        if ((Client::where('user_id', $request->input('client_id'))->get())->isEmpty()) {
//            return response()->json("Нет прав", 403);
//        } else {
//            $card = Card::create($request->all());
//            return response()->json($card, 201);
//        }
    }

    /**
     * Display the specified resource.
     *
     * @param Employee $employee
     * @return  JsonResource
     */
    public function show(Employee $employee): JsonResource
    {
        return new EmployeeResource($employee);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
//        return response()->json(null, 204);
        return response()->json(['status' => 'ok'], 204);
    }
}
