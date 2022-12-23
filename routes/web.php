<?php

use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Admin\UserController as AdminUserController;
use \App\Http\Controllers\ClientController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('landing');
});

//Добавляет CRUD для маршрутов регистрации, аутентификации и сброса пароля
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//middleware будут выполняться в той последовательности, в которой они перечислены в массиве.
Route::name('admin.')->prefix('admin')->middleware(['auth', 'is_admin'])
    ->group(function(){
    Route::resource('users', AdminUserController::class);
});

Route::get('/landing', function (){
    return view('landing');
});

Route::resource('client', ClientController::class);

Route::match(['get', 'post'], '/userprofile', [UserProfileController::class, 'index'])->name('userProfile')->middleware('auth');

Route::get('/about', function () {
    return view('about');
});
