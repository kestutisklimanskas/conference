<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\API\ApiController;
use App\Http\Controllers\GuestController;
Route::get('/', function () {
    return view('welcome');
});

Route::resource('conferences', ProductController::class);
Route::get('/register', [ApiController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [ApiController::class, 'register']);
Route::get('/login', [ApiController::class, 'showLoginForm'])->name('login');
Route::post('/login', [ApiController::class, 'login']);
Route::post('/logout', [ApiController::class, 'logout'])->name('logout');
Route::get('/guest', [GuestController::class, 'continueAsGuest'])->name('continue');
