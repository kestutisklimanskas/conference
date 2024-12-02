<?php

namespace App\Http\Controllers;

use App\Models\Conference;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $conferences = Conference::latest()->paginate(5);

        return view('conferences.index', compact('conferences'))->with((request()->input('page')));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('conferences.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50|unique:conferences,name',
            'description' => 'required',
            'start_date' => 'required|date|before_or_equal:end_date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'location' => 'required',
            'visitors' => 'required',

        ]);

        Conference::create($request->all());

        return redirect()->route('conferences.index')
            ->with('success', 'Conference created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Conference $conference)
    {
        return view('conferences.show', compact('conference'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Conference $conference)
    {
        return view('conferences.edit', compact('conference'));


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conference $conference)
    {
        $request->validate([
            'name' => 'required|max:50',
            'description' => 'required',
            'start_date' => 'required|date|before_or_equal:end_date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'location' => 'required',
            'visitors' => 'required',


        ]);
        $conference->update($request->all());
        return redirect()->route('conferences.index')
            ->with('success', 'Conference updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conference $conference)
    {
        
        $conference->delete();
        return redirect()->route('conferences.index')->with('success', 'Conference deleted successfully.');

    }
}
