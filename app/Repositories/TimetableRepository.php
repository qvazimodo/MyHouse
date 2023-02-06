<?php


namespace App\Repositories;


use App\Models\Client;
use App\Models\Employee;
use App\Models\Timetable;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TimetableRepository
{
    protected array $clientsAddressIds;
    protected array $timeWindows = [1, 2, 3, 4,];


    public function getClientsAddressIds(): void
    {
        $id = Auth::user()->id;

        $clientsAddressIds = Client::where('user_id', '=', $id)
            ->join('apartments', 'apartments.id', '=', 'clients.apartment_id')
            ->join('houses', 'apartments.house_id', '=', 'houses.id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->join('house_numbers', 'house_number_street.house_number_id', '=', 'house_numbers.id')
            ->join('streets', 'house_number_street.street_id', '=', 'streets.id')
            ->select(
                'house_numbers.id as house_id',
                'streets.id as street_id'
            )
            ->get()
            ->toArray();

        $this->clientsAddressIds = $clientsAddressIds[0];
    }

    public function getEmployeeByObject($profession)
    {
        $this->getClientsAddressIds();
        return Employee::where('held_position', '=', $profession)
            ->join('employee_serviced_address', 'employees.id', '=', 'employee_serviced_address.employee_id')
            ->join('house_number_street', 'employee_serviced_address.house_number_street_id', '=', 'house_number_street.id')
            /*            ->join('timetables', 'employees.id', '=', 'timetables.employer_id')
                        ->where('timetables.date', '=', $mysqlDate)*/
            ->where('house_number_street.street_id', '=', $this->clientsAddressIds["street_id"])
            ->where('house_number_street.house_number_id', '=', $this->clientsAddressIds["house_id"])
            ->get();
    }

    public function getFreeTimeEmployeeById($profession, $mysqlDate): array
    {
        $freeTimes = [];
        $employee = $this->getEmployeeByObject($profession);
        $plucked = $employee->pluck('employee_id');
        foreach ($plucked->all() as $employee) {
            $array = [];
            foreach (Timetable::where('employer_id', $employee)
                         ->where('date', $mysqlDate)
                         ->get('time_window_id')
                         ->toArray() as $item) {
                $array[] = $item['time_window_id'];
            }
            $array = array_diff($this->timeWindows, $array);
            $name = User::where('id', $employee)
                ->get(['name', 'last_name']);
            $name[] = $array;
            $freeTimes[$employee] = $name;
        }
        return $freeTimes;
    }
}
