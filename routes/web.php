<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\API\ApiController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\CookiesController;

// Home route
Route::get('/', function () {
    return view('welcome');
});

// Conference routes
Route::resource('conferences', ProductController::class);

// Authentication routes
Route::prefix('auth')->group(function () {
    Route::get('/register', [ApiController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [ApiController::class, 'register']);
    Route::get('/login', [ApiController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [ApiController::class, 'login']);
    Route::post('/logout', [ApiController::class, 'logout'])->name('logout');
});

// Guest routes
Route::get('/guest', [GuestController::class, 'continueAsGuest'])->name('continue');

// Cookie routes
Route::prefix('cookies')->group(function () {
    Route::get('set', [CookiesController::class, 'setCookie'])->name('cookies.set');
    Route::get('get', [CookiesController::class, 'getCookie'])->name('cookies.get');
    Route::get('forget', [CookiesController::class, 'forgetCookie'])->name('cookies.forget');
    Route::get('check', [CookiesController::class, 'checkCookie'])->name('cookies.check');
});