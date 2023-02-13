<?php
namespace App\Services;

use App\Models\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

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

    public function getClientId(): int
    {
        return Client::where('user_id', Auth::user()->id)->first()->id;
    }
}

