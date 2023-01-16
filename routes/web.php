<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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
        Route::resource('clients', ClientController::class);
        Route::get('employees', function () {
            return view('admin.employees');
        })->name('employees');
        Route::get('/meters', function () {
            return view('admin.meters');
        })->name('meters');
});

Route::get('/landing', function (){
    return view('landing');
});


Route::match(['get', 'post'], '/userprofile', [UserProfileController::class, 'index'])->name('userProfile')->middleware('auth');

Route::get('/about', function () {
    return view('about');
});

Route::get('/navigation', function () {
    return view('navigation');
});

Route::get('/rates', function () {
    return view('rates');
});

Route::get('/contacts', function () {
    return view('contacts');
});

Route::get('/announcement', function () {
    return view('announcement');
})->name('announcement');

Route::get('/usercards', function () {
    return view('usercards');
})->name('usercards');

Route::get('/serviced_houses', function (){
    return view('serviced_houses');
})->name('serviced_houses');
