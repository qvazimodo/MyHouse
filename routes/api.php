<?php

use App\Http\Controllers\API\Admin\ClientController as AdminClientController;
use App\Http\Controllers\API\Admin\EmployeeAPIController;
use App\Http\Controllers\API\Admin\MeterController as AdminMeterController;
use App\Http\Controllers\API\CardController;
use App\Http\Controllers\API\ClientAnnouncementController;
use App\Http\Controllers\API\HouseController;
use App\Http\Controllers\API\MeterController;
use App\Http\Controllers\API\MeterValueController;
use App\Http\Controllers\API\TimetableController;
use App\Http\Controllers\Auth\CodeCheckController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
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

Route::get('client/cards', [ClientAnnouncementController::class, 'index']);


//api проверяет, является ли клиентом текущий пользователь
Route::get('is_client', 'App\Http\Controllers\ClientController@isClient');

//api по счетчикам
Route::resource('meters', MeterValueController::class)->except(['create', 'edit']);


//Route::get('auth_meters', 'App\Http\Controllers\Meters\MeterController@showAuthClient')->middleware('auth');

Route::get('/employees', [EmployeeAPIController::class, 'index']);
Route::post('/employees', [EmployeeAPIController::class, 'store']);
Route::get('/employees/{employee}', [EmployeeAPIController::class, 'show']);
Route::delete('/employees/{employee}', [EmployeeAPIController::class, 'destroy']);

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
    Route::get('/client_meters/values', [MeterController::class, 'clientMetersValues']);
})->middleware('auth');

Route::prefix('admin')->group(function () {
    //api вывода информации обо всех счетчиках всех пользователей
    Route::get('/meters', [AdminMeterController::class, 'index']);

    //api вывода показаний всех счетчиков всех пользователей
    Route::get('/meters/values', [AdminMeterController::class, 'allMetersValues']);

    //список адресов домов, обслуживаемых компанией
    Route::get('/houses/addresses', [HouseController::class, 'addresses']);

    //список всех домов, обслуживаемых компанией
    Route::get('/houses', [HouseController::class, 'index']);

    //дома с адресами клиентов
    Route::get('/houses/{street_id}/{house_number_id}', [HouseController::class, 'show']);

    //описания домов
    Route::get('/houses/description/{street_id}/{house_id}', [HouseController::class, 'show']);

    //Сотрудники
    Route::get('/employees', [EmployeeAPIController::class, 'index']);

    Route::get('/employees/by_address/{street_id}/{house_id}',
        [EmployeeAPIController::class, 'getEmployeesByAddress']);

    Route::put('/employees', [EmployeeAPIController::class, 'update']);

    Route::delete('/employees/{employee}', [EmployeeAPIController::class, 'destroy']);

    //Клиенты
    Route::get('/clients',
        [AdminClientController::class, 'index']);

    Route::get('/clients/by_address/{street_id}/{house_id}',
        [AdminClientController::class, 'getClientsByAddress']);

    Route::put('/clients/advanced/',
        [AdminClientController::class, 'update']);

    Route::delete('/clients/advanced/{client}',
        [AdminClientController::class, 'destroy']);

});

Route::prefix('')->group(function () {
//api вывода информации обо всех домах для гл страницы
    Route::get('/houses', [HouseController::class, 'showAllHouses']);
});


// Password reset routes
Route::post('password/email', ForgotPasswordController::class);
Route::post('password/code/check', CodeCheckController::class);
Route::post('password/reset', ResetPasswordController::class);

//Вызов работника
Route::apiResource('timetable', TimetableController::class);
Route::get('check/timetable', [TimetableController::class, 'checkFreeTime']);
