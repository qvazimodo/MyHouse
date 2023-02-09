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
    public function index(): JsonResponse
    {
        $clients = Employee::join('users', 'users.id', '=', 'employees.user_id')
            ->select(
                'users.id as user_id',
                'users.name as employee_name',
                'users.birth_date as employee_birth_date',
                'users.phone as employee_phone',
                'users.email as employee_email',
                'users.patronymic as employee_patronymic',
                'users.last_name as employee_last_name',
                'employees.id as employee_id',
                'employees.held_position as position',
            )
            ->get();

        return response()->json([
            'data' => $clients,
            'status' => 'ok'
        ], 200);
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
    public function update(Request $request)
    {
        $input = $request->all();
        $userId = $input['userId'];
        $employeeId = $input['employeeId'];


        $user = User::where('id', $userId)->first();
        $user['name'] = $input['name'];
        $user['patronymic'] = $input['patronymic'];
        $user['last_name'] = $input['lastName'];
        $user['phone'] = $input['phone'];
        $user['email'] = $input['email'];
//        $user['birth_date'] = $input['birthDate '];
        $user->save();

        $employee = Employee::where('id', $employeeId)->first();
        $employee['held_position']= $input['position'];

        $employee->save();

        return response()->json([
            'status' => 'ok',
            "message" => "Профиль сотрудника обновлён успешно!",
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Employee  $employee
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Employee $employee):JsonResponse
    {
        $result = $employee->delete();
        return response()->json(['status' => 'ok', 'data' => $result], 202);
    }

    public function getEmployeesByAddress($streetId, $houseNumberId): JsonResponse
    {
        $clients = Employee::join('users', 'users.id', '=', 'employees.user_id')
            ->join('employee_serviced_address', 'employee_serviced_address.employee_id', '=', 'employees.id')
            ->join('house_number_street', 'house_number_street.id', '=',
                'employee_serviced_address.house_number_street_id')
            ->where('house_number_street.street_id', $streetId)
            ->where('house_number_street.house_number_id', $houseNumberId)
            ->select(
                'users.id as user_id',
                'users.name as employee_name',
                'users.birth_date as employee_birth_date',
                'users.phone as employee_phone',
                'users.email as employee_email',
                'users.patronymic as employee_patronymic',
                'users.last_name as employee_last_name',
                'employees.id as employee_id',
                'employees.held_position as position',
            )
            ->get();

        return response()->json([
            'data' => $clients,
            'status' => 'ok'
        ], 200);
    }
}
