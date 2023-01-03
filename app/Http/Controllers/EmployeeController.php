<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class EmployeeController extends Controller
{

    public function index():View
    {
        $employees = User::query()->where('is_employee', '=','1')->orderBy('updated_at', 'desc')->paginate(20);

        return view('employee.index')->with('employees', $employees);
    }

    public function create():View
    {
        $employee = new Employee();
        return view('employee.create')
            ->with('employee', $employee);
    }

    public function store(Request $request, Employee $employee): RedirectResponse
    {
        $employee->fill($request->validated());

        $employee->save();

        return redirect()->route('employee.index')
            ->with('employee', Employee::all()->sortDesc())
            ->with('success', "Новый работник добавлен успешно!");
    }

    public function show($id)
    {
        $employee = User::query()->where('id', $id)->first();
        return view('client.show')->with('employee', $employee);
    }

    public function edit(Employee $employee):View
    {
        return view('employee.create')
            ->with(
                'employee', $employee);
    }


    public function update(Request $request, Employee $employee): RedirectResponse
    {
        $employee->fill($request->validated());
        $employee->save();

        return redirect()->route('employee.index')
            ->with('success', 'Данные работника изменены успешно!');
    }


    public function destroy(Employee $employee): RedirectResponse
    {
        $employee->delete();
        return redirect()->route('employee.index')
            ->with('success', 'Данные работника удалены успешно!');
    }
}
