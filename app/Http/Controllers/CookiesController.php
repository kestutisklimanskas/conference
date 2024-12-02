<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use App\Models\User;

class CookiesController extends Controller
{
    public function setCookie(Request $request)
    {
        $minutes = 60;
        $response = new Response('Hello World');
        $response->withCookie(cookie('name', 'value', $minutes));
        return $response;
    }

    public function getCookie(Request $request)
    {
        $value = $request->cookie('name');
        echo $value;
    }

    public function forgetCookie(Request $request)
    {
        $response = new Response('Hello World');
        $response->withCookie(Cookie::forget('name'));
        return $response;
    }

    public function checkCookie(Request $request)
    {
        if ($request->cookie('name') !== null) {
            echo 'The cookie has been set.';
        } else {
            echo 'The cookie has not been set.';
        }
    }
}
