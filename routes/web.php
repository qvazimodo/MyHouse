<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('landing');
});

Route::get('/landing', function (){
    return view('landing');
});

Route::get('/about', function () {
    return view('about');
});



//Добавляет CRUD для маршрутов регистрации, аутентификации и сброса пароля
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//middleware будут выполняться в той последовательности, в которой они перечислены в массиве.
Route::name('admin.')->prefix('admin')->middleware(['auth', 'is_admin'])
    ->group(function(){
        Route::get('/', function () {
            return view('admin.index');
        })->name('index');
        Route::resource('users', AdminUserController::class);
        Route::resource('clients', ClientController::class);
        Route::get('employees', function () {
            return view('admin.employees');
        })->name('employees');
        Route::get('/meters', function () {
            return view('admin.meters');
        })->name('meters');
        Route::get('/houses', function () {
            return view('admin.houses');
        })->name('houses');
});




Route::match(['get', 'post'], '/userprofile', [UserProfileController::class, 'index'])->name('userProfile')->middleware('auth');


Route::get('/rates', function () {
    return view('rates');
});

Route::get('/contacts', function () {
    return view('contacts');
});

Route::get('/announcement', function () {
    return view('announcement');
})->name('announcement');

Route::get('/passwordreq', function () {
    return view('passwordreq');
})->name('passwordreq');

Route::get('/passwordcode', function () {
    return view('passwordcode');
})->name('passwordcode');

Route::get('/passwordnew', function () {
    return view('passwordnew');
})->name('passwordnew');

Route::get('/usercards', function () {
    return view('usercards');
})->name('usercards');

Route::get('/serviced_houses', function (){
    return view('serviced_houses');
})->name('serviced_houses');

Route::get('/news', function (){
    return view('news');
})->name('news');



