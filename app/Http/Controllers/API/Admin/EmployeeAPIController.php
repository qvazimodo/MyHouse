<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EmployeeAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection
     */
    public function index():ResourceCollection
    {
//        return response()->json(Employee::select("id","user_id","held_position")->with('user:id,name,patronymic,last_name')->get());
        return EmployeeResource::collection(
            Employee::select("id", "user_id", "held_position")->with('user:id,name,patronymic,last_name,birth_date')->paginate(3)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  Employee $employee
     * @return  JsonResource
     */
    public function show(Employee $employee):JsonResource
    {
        return new EmployeeResource($employee);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Employee $employee
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Employee $employee):JsonResponse
    {
        $employee->delete();
//        return response()->json(null, 204);
        return response()->json(['status'=>'ok'], 204);
    }
}
