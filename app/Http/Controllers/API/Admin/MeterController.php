<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeterResource;
use App\Models\Meter;
use App\Models\Month;
use App\Models\MonthYear;
use App\Models\Year;
use Illuminate\Http\JsonResponse;

class MeterController extends Controller
{
    public function index()
    {
        return MeterResource::collection(Meter::all());
    }

    public function allMetersValues(): JsonResponse
    {
        $metersValues = Meter::with(['client', 'clientUser', 'meterMonthYear'])->paginate(5);


        $monthYears = MonthYear::all();
        $years = Year::all();
        $months = Month::all();

        return response()->json([
            'data' => $metersValues,
            'meta' => ['monthYears' => $monthYears, 'years' => $years, 'months' => $months]
        ], 200);
    }

    public function selectedMeterValues(int $id): JsonResponse
    {
        $meterValues = [];
        foreach (Year::all() as $year) {
            $meterValues[$year['number']] = Meter::query()
                ->join('meter_month_year', 'meters.id', '=', 'meter_month_year.meter_id')
                ->join('month_year', 'meter_month_year.month_year_id', '=', 'month_year.id')
                ->join('months', 'month_year.month_id', '=', 'months.id')
                ->join('years', 'month_year.year_id', '=', 'years.id')
                ->where('meters.id', $id)
                ->where('years.id', $year['id'])
                ->get();
        }

        return response()->json([
            'data' => $meterValues,
        ], 200);
    }

    public function collectiveMeters(): JsonResponse
    {
        $meters = Meter::whereNotNull('house_id')->get();

        return response()->json([
            'data' => $meters,
        ], 200);
    }

    public function collectiveMetersByAddress($streetId, $houseNumberId): JsonResponse
    {
        $meters = Meter::join('houses', 'meters.house_id', '=', 'houses.id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->where('house_number_street.street_id', $streetId)
            ->where('house_number_street.house_number_id', $houseNumberId)
            ->get();

        return response()->json([
            'data' => $meters,
            'status' => 'ok'
        ], 200);
    }

    public function clientMetersByAddress($streetId, $houseNumberId): JsonResponse
    {
        $meters = Meter::join('clients', 'meters.client_id', '=', 'clients.id')
            ->join('apartments', 'apartments.id', '=', 'clients.apartment_id')
            ->join('houses', 'houses.id', '=', 'apartments.house_id')
            ->join('house_number_street', 'houses.house_number_street_id', '=', 'house_number_street.id')
            ->where('house_number_street.street_id', $streetId)
            ->where('house_number_street.house_number_id', $houseNumberId)
            ->get();

        return response()->json([
            'data' => $meters,
            'status' => 'ok'
        ], 200);
    }
}
