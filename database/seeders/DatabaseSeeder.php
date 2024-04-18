<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        //for conference
        // Conference::factory(10)->create();
        User::factory()->create([
            'name' => 'Test Conference',
            'description' => 'Test Conference Description',
            'start_date' => '2024-04-06 21:05:19',
            'end_date' => '2024-04-06 21:05:19',
            'location' => 'Test Conference Location',
        ]);
    }
}
