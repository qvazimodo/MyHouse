<?php


namespace App\Services;


use Illuminate\Http\Client\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @method body()
 */
class TimetableService
{
    public function checkDate($requestDate): array
    {
        $date = explode('-', $requestDate, 3);
        $response = Http::get("https://isdayoff.ru/api/getdata?year=" . $date[2] . '&month=' . $date[1] . '&day=' . $date[0])->body();
        if ($response == '1') {
            return [
                'message' => 'Выходной день',
                'flag' => 1
            ];
        }
        return [
            'flag' => 0
        ];

    }

    public function convertDate($requestDate): string
    {
        $date = strtotime($requestDate);
        return date('Y-m-d', $date);
    }
}
