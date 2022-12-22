<?php

use Illuminate\Http\Request;
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

