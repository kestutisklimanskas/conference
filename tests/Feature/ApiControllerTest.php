<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ApiControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->userPassword = 'password';
    }

    protected function createUser(array $attributes = []): User
    {
        return User::factory()->create(array_merge([
            'password' => Hash::make($this->userPassword),
        ], $attributes));
    }

    protected function loginUser(array $credentials = []): \Illuminate\Testing\TestResponse
    {
        $defaultCredentials = [
            'email' => $this->user->email,
            'password' => $this->userPassword,
        ];

        return $this->post(route('login'), array_merge($defaultCredentials, $credentials));
    }

    public function testShowRegistrationForm()
    {
        $response = $this->get(route('register'));

        $response->assertStatus(200);
        $response->assertViewIs('register');
    }

    public function testShowLoginForm()
    {
        $response = $this->get(route('login'));

        $response->assertStatus(200);
        $response->assertViewIs('login');
    }

    public function testRegister()
    {
        $data = [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $response = $this->post(route('register'), $data);

        $response->assertRedirect(route('login'));
        $this->assertDatabaseHas('users', [
            'email' => $data['email'],
        ]);
    }

    public function testLogin()
    {
        $this->user = $this->createUser();

        $response = $this->loginUser();

        $response->assertRedirect(route('conferences.index'));
        $this->assertAuthenticatedAs($this->user);
    }

    public function testLoginValidationFails()
    {
        $data = [
            'email' => 'invalid-email',
            'password' => '',
        ];

        $response = $this->post(route('login'), $data);

        $response->assertRedirect(route('login'));
        $response->assertSessionHasErrors(['email', 'password']);
    }

    public function testLoginInvalidCredentials()
    {
        $this->user = $this->createUser();

        $response = $this->loginUser(['password' => 'wrong-password']);

        $response->assertRedirect(route('login'));
        $response->assertSessionHas('error', 'Invalid login details');
    }


    public function testLogout()
    {
        $this->user = $this->createUser();

        $response = $this->actingAs($this->user)->post(route('logout'));

        $response->assertRedirect(route('login'));
        $this->assertGuest();
    }
}