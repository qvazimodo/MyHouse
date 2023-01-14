<?php

use App\Http\Controllers\API\Admin\EmployeeAPIController;
use App\Http\Controllers\API\Admin\HouseController;

use App\Http\Controllers\API\CardController;
use App\Http\Controllers\API\ClientAnnouncementController;
use App\Http\Controllers\API\MeterController;
use App\Http\Controllers\API\MeterValueController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('cards', CardController::class)->middleware('auth');

Route::get('user_cards', [CardController::class, 'getUserCards']);
Route::post('uploading-photos', 'CardController@uploadPhoto');

Route::get('client_ad', [ClientAnnouncementController::class, 'index']);


//api проверяет, является ли клиентом текущий пользователь
Route::get('is_client', 'App\Http\Controllers\ClientController@isClient');

//api по счетчикам
Route::resource('meters', MeterValueController::class)->except(['create', 'edit']);


//Route::get('auth_meters', 'App\Http\Controllers\Meters\MeterController@showAuthClient')->middleware('auth');

Route::get('/employees', [EmployeeAPIController::class, 'index']);
Route::post('/employees', [EmployeeAPIController::class, 'store']);
Route::get('/employees/{employee}', [EmployeeAPIController::class, 'show']);
Route::delete('/employees/{employee}', [EmployeeAPIController::class, 'destroy']);
//Route::get('/houses', [HouseController::class, 'index']);

Route::resource('/houses', HouseController::class);


Route::prefix('auth')->group(function () {
//api вывода  текущего пользователя
    Route::get('auth_user', function () {
        $user = Auth::user();
        return $user;
    });

//CSRF-token текущего пользователя
    Route::get('/csrf', function () {
        return response()->json(Session::token());
    });
})->middleware('auth');

Route::prefix('')->group(function () {
//api вывода информации обо всех счетчиках текущего пользователю
    Route::get('/client_meters', [MeterController::class, 'index']);

//api вывода показаний всех счетчиков по текущему пользователю
    Route::get('/client_meters/values', [MeterController::class, 'values']);
})->middleware('auth');
