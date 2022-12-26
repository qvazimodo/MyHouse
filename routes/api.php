<?php

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
Route::post('uploading-photo-api', 'App\Http\Controllers\CardController@uploadPhoto');

Route::resource('meters',App\Http\Controllers\Meter\MeterController::class)->except(['create', 'edit']);

Route::get('auth_user', function(){
    $user = Auth::user();
    return  $user;
})->middleware('auth');

/*
//API роутов по счетчикам горячей воды
Route::get('hot_meters', 'App\Http\Controllers\HotWaterMeterController@index');
Route::get('hot_meters/{hot_meter}', 'App\Http\Controllers\HotWaterMeterController@show');
Route::post('hot_meters', 'App\Http\Controllers\HotWaterMeterController@store');
Route::put('hot_meters/{hot_meter}','App\Http\Controllers\HotWaterMeterController@update');
Route::delete('hot_meters/{hot_meter}', 'App\Http\Controllers\HotWaterMeterController@delete');
//API роутов по счетчикам холодной воды
Route::get('cold_meters', 'App\Http\Controllers\ColdWaterMeterController@index');
Route::get('cold_meters/{cold_meter}', 'App\Http\Controllers\ColdWaterMeterController@show');
Route::post('cold_meters', 'App\Http\Controllers\ColdWaterMeterController@store');
Route::put('cold_meters/{cold_meter}','App\Http\Controllers\ColdWaterMeterController@update');
Route::delete('cold_meters/{cold_meter}', 'App\Http\Controllers\ColdWaterMeterController@delete');
//API роутов по счетчикам газа
Route::get('gas_meters', 'App\Http\Controllers\GasMeterController@index');
Route::get('gas_meters/{gas_meter}', 'App\Http\Controllers\GasMeterController@show');
Route::post('gas_meters', 'App\Http\Controllers\GasMeterController@store');
Route::put('gas_meters/{gas_meter}','App\Http\Controllers\GasMeterController@update');
Route::delete('gas_meters/{gas_meter}', 'App\Http\Controllers\GasMeterController@delete');
//API роутов по счетчикам электричества
Route::get('power_meters', 'App\Http\Controllers\PowerMeterController@index');
Route::get('power_meters/{power_meter}', 'App\Http\Controllers\PowerMeterController@show');
Route::post('power_meters', 'App\Http\Controllers\PowerMeterController@store');
Route::put('power_meters/{power_meter}','App\Http\Controllers\PowerMeterController@update');
Route::delete('power_meters/{power_meter}', 'App\Http\Controllers\PowerMeterController@delete');*/
