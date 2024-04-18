<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $conference = new  \App\Models\Conference([
            'name' => 'Test Conference',
            'description' => 'Test Conference Description',
            'start_date' => '2024-04-06 21:05:19',
            'end_date' => '2024-04-06 21:05:19',
            'location' => 'Test Conference Location',
        ]);
    }
}
