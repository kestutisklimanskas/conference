<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuestController extends Controller
{
    public function continueAsGuest(Request $request)
    {
        // Perform any necessary actions for guests
        
        // For example, you can set a session variable to identify guests
        $request->session()->put('guest', true);

        // Redirect to the desired page
        return redirect()->route('conferences.index');
    }
}