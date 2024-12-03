<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Conference;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class ProductControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testIndex()
    {
        Conference::factory()->count(10)->create();

        $response = $this->get(route('conferences.index'));

        $response->assertStatus(200);
        $response->assertViewIs('conferences.index');
        $response->assertViewHas('conferences');
    }

    public function testCreate()
    {
        $response = $this->get(route('conferences.create'));

        $response->assertStatus(200);
        $response->assertViewIs('conferences.create');
    }

    public function testStore()
    {
        $data = [
            'name' => $this->faker->name,
            'description' => $this->faker->paragraph,
            'start_date' => now()->toDateString(),
            'end_date' => now()->addDays(1)->toDateString(),
            'location' => $this->faker->address,
            'visitors' => $this->faker->numberBetween(1, 100),
        ];

        $response = $this->post(route('conferences.store'), $data);

        $response->assertRedirect(route('conferences.index'));
        $response->assertSessionHas('success', 'Conference created successfully.');
        $this->assertDatabaseHas('conferences', $data);
    }

    public function testShow()
    {
        $conference = Conference::factory()->create();

        $response = $this->get(route('conferences.show', $conference));

        $response->assertStatus(200);
        $response->assertViewIs('conferences.show');
        $response->assertViewHas('conference', $conference);
    }

    public function testEdit()
    {
        $conference = Conference::factory()->create();

        $response = $this->get(route('conferences.edit', $conference));

        $response->assertStatus(200);
        $response->assertViewIs('conferences.edit');
        $response->assertViewHas('conference', $conference);
    }

    public function testUpdate()
    {
        $conference = Conference::factory()->create();

        $data = [
            'name' => $this->faker->name,
            'description' => $this->faker->paragraph,
            'start_date' => now()->toDateString(),
            'end_date' => now()->addDays(1)->toDateString(),
            'location' => $this->faker->address,
            'visitors' => $this->faker->numberBetween(1, 100),
        ];

        $response = $this->put(route('conferences.update', $conference), $data);

        $response->assertRedirect(route('conferences.index'));
        $response->assertSessionHas('success', 'Conference updated successfully.');
        $this->assertDatabaseHas('conferences', $data);
    }

    public function testDestroy()
    {
        $conference = Conference::factory()->create();

        $response = $this->delete(route('conferences.destroy', $conference));

        $response->assertRedirect(route('conferences.index'));
        $response->assertSessionHas('success', 'Conference deleted successfully.');
        $this->assertDatabaseMissing('conferences', ['id' => $conference->id]);
    }
}