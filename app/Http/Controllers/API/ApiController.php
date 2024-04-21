<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use resources\views\conferences\index;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
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
        try{
        $validateUser = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|email|unique:users, email',
            'password' => 'required|string|confirmed',
        ]);

        if($validateUser->fails()){
            return response()->json($validateUser->errors()->toJson(), 400);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return view('login');

        // return response()->json([
        //     'status' => true,
        //     'message' => 'User successfully registered',
        //     'user' => $user,
        //     'token' => $user->createToken('API TOKEN')->plainTextToken,
        // ], 201);


     } catch(\Exception $e){
            return response()->json([
                'status' => false,
                'message' => 'Validation failedas',
                'error' => $e->getMessage(),
            ], 422);
        }
    }
    public function login(Request $request)
    {
        try{
        $validateUser = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if($validateUser->fails()){
            return response()->json($validateUser->errors()->toJson(), 400);
        }

        if(!Auth::attempt($request->only('email', 'password'))){
            Session::flash('login_failed', 'Invalid email or password.');
            
        }

        $user = Auth::user();

        return redirect()->route('conferences.index');
        
    } catch(\Exception $e){
        return response()->json([
            'status' => false,
            'message' => 'Validation failed',
            'error' => $e->getMessage(),
        ], 422);
    }
    }   
    public function profile(Request $request)
    {
        $userData= auth()->user();
        return response()->json([
            'status' => true,
            'message' => 'User profile',
            'user' => $request->user(),
            'data' => $userData,
            'id' => auth()->user()->id,
        ], 200);
    }
    public function logout(Request $request)
    {
        $userData= auth()->user();
        $accessToken = $userData->currentAccessToken();
        if ($request->user() && $request->user()->currentAccessToken()) {
            $accessToken = $userData->currentAccessToken();
            $accessToken->delete();
        }
    
        //return view('login');
      
        // return response()->json([
        //     'status' => true,
        //     'message' => 'User successfully logged out',
        //     'data' => $accessToken,
            
        // ], 200);

        if(Auth::check()){
            Auth::logout();
            return redirect()->route('login');
        }
        //return redirect()->route('login');

    }
}
