<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;

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
        return response($request->cookie('name'));
    }

    public function forgetCookie(Request $request)
    {
        $response = new Response('Hello World');
        $response->withCookie(Cookie::forget('name'));
        return $response;
    }

    /**
     * Check if the cookie has been set.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function checkCookie(Request $request)
    {
        $message = $request->cookie('name') !== null ? 'The cookie has been set.' : 'The cookie has not been set.';
        return response($message);
    }
}