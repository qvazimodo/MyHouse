<?php


namespace App\Repositories;


use App\Models\Client;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;

class TimetableRepository
{
    protected array $clientsAddressIds;

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

    public function getEmployeeByObject($profession): array
    {
        $this->getClientsAddressIds();
        return Employee::where('held_position', '=', $profession)
            ->join('employee_serviced_address', 'employees.id', '=', 'employee_serviced_address.employee_id')
            ->join('house_number_street', 'employee_serviced_address.house_number_street_id', '=', 'house_number_street.id')
            ->where('house_number_street.street_id', '=', $this->clientsAddressIds["street_id"])
            ->where('house_number_street.house_number_id', '=', $this->clientsAddressIds["house_id"])
            ->get()
            ->toArray();
    }
}
