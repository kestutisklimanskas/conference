<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    public function showRegistrationForm()
    {
        return view('register');
    }

    public function showLoginForm()
    {
        return view('login');
    }

    public function register(Request $request)
    {
        try {
            $this->validateRegister($request);

            $user = $this->createUser($request);

            return redirect()->route('login')->with('success', 'User registered successfully.');
        } catch (\Exception $e) {
            return response()->json(
                [
                'status' => false,
                'message' => 'Validation failed',
                'error' => $e->getMessage(),
                ], 422
            );
        }
    }

    public function login(Request $request)
    {
        $validateUser = Validator::make(
            $request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
            ]
        );

        if ($validateUser->fails()) {
            return redirect()->route('login')->withErrors($validateUser)->withInput();
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return redirect()->route('login')->with('error', 'Invalid login details');
        }

        return redirect()->route('conferences.index');
    }

    public function profile(Request $request)
    {
        $user = $request->user();
        return response()->json(
            [
            'status' => true,
            'message' => 'User profile',
            'user' => $user,
            ], 200
        );
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        if ($user && $user->currentAccessToken()) {
            $user->currentAccessToken()->delete();
        }

        Auth::logout();
        return redirect()->route('login');
    }

    protected function validateRegister(Request $request)
    {
        $validateUser = Validator::make(
            $request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            ]
        );

        if ($validateUser->fails()) {
            throw new \Exception($validateUser->errors()->first());
        }
    }

    protected function validateLogin(Request $request)
    {
        $validateUser = Validator::make(
            $request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
            ]
        );

        if ($validateUser->fails()) {
            throw new \Exception($validateUser->errors()->first());
        }
    }

    protected function createUser(Request $request): User
    {
        return User::create(
            [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            ]
        );
    }
}
