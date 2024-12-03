<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;

class CookiesControllerTest extends TestCase
{
    public function testSetCookie()
    {
        $response = $this->call('GET', 'set-cookie');

        $response->assertStatus(200);
        $response->assertSee('Hello World');
        $this->assertTrue($response->headers->has('set-cookie'));
    }

    public function testGetCookie()
    {
        // Set the cookie in the request
        $response = $this->withCookie('name', 'value')->call('GET', 'get-cookie');

        $response->assertStatus(200);
        $this->assertEquals('value', $response->getContent());
    }

    public function testForgetCookie()
    {
        // Set the cookie in the request
        $response = $this->withCookie('name', 'value')->call('GET', 'forget-cookie');

        $response->assertStatus(200);
        $response->assertSee('Hello World');
        $this->assertTrue($response->headers->has('set-cookie'));
    }

    public function testCheckCookie()
    {
        // Set the cookie in the request
        $response = $this->withCookie('name', 'value')->call('GET', 'check-cookie');

        $response->assertStatus(200);
        $this->assertEquals('The cookie has been set.', $response->getContent());

        $response = $this->call('GET', 'forget-cookie');

        $response = $this->call('GET', 'check-cookie');

        $response->assertStatus(200);
        $this->assertEquals('The cookie has not been set.', $response->getContent());
    }
}