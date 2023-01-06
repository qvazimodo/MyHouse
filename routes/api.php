<?php

use App\Http\Controllers\API\Admin\EmployeeAPIController;
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

Route::get('cards', 'App\Http\Controllers\CardController@index');
Route::get('cards/{card}', 'App\Http\Controllers\CardController@show');
Route::post('cards', 'App\Http\Controllers\CardController@store');
Route::put('cards/{card}','App\Http\Controllers\CardController@update');
Route::delete('cards/{card}', 'App\Http\Controllers\CardController@delete');
Route::get('user_cards', 'App\Http\Controllers\CardController@getUserCards');
Route::post('uploading-photos', 'App\Http\Controllers\CardController@uploadPhoto');
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

