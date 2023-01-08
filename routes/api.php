<?php

use App\Http\Controllers\API\Admin\EmployeeAPIController;
use App\Http\Controllers\API\HouseController;
use App\Http\Controllers\API\CardController;
use App\Http\Controllers\Meters\MeterController;
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

Route::get('cards', 'CardController@index');
Route::get('cards/{card}', 'CardController@show');
Route::post('cards', 'CardController@store');
Route::put('cards/{card}','CardController@update');
Route::delete('cards/{card}', 'CardController@delete');
Route::get('user_cards', 'CardController@getUserCards');
Route::post('uploading-photos', 'CardController@uploadPhoto');
//api проверят является ли клиентом текущий пользователь
Route::get('is_client', 'App\Http\Controllers\ClientController@isClient');

//api по счетчикам
Route::resource('meters',MeterController::class)->except(['create', 'edit']);

//api вывода всех счетчиков по текущему пользователю
Route::get('auth_meters','App\Http\Controllers\Meters\MeterController@showAuthClient')->middleware('auth');

//api вывода  текущего пользователя
Route::get('auth_user', function () {
    $user = Auth::user();
    return $user;
})->middleware('auth');

Route::get('/employees', [EmployeeAPIController::class, 'index']);
Route::get('/employees/{employee}', [EmployeeAPIController::class, 'show']);
Route::delete('/employees/{employee}', [EmployeeAPIController::class, 'destroy']);
Route::get('/houses', [HouseController::class, 'index']);


