@extends('conferences.layout')
@section('content')

<div class = "row">
    <div class = "col-lg-12">
        <div class = "pull-left">
            <h2>Show Conference</h2>
        </div>
        <div class = "pull-right">
            <a class = "btn btn-primary" href = "{{ route('conferences.index') }}"> Back</a>
        </div>
    </div>
</div>

<div class ="row">
    <div class = "col-xs-12 col-sm-12 col-md-12">
        <div class = "form-group">
            <strong>Name:</strong>
            {{ $conference->name }}
        </div>
    </div>
    <div class = "col-xs-12 col-sm-12 col-md-12">
        <div class = "form-group">
            <strong>Description:</strong>
            {{ $conference->description }}
        </div>
    <div class = "col-xs-12 col-sm-12 col-md-12">
        <div class = "form-group">
            <strong>Start Date:</strong>
            {{ $conference->start_date }}
        </div>
        <div class = "col-xs-12 col-sm-12 col-md-12">
            <div class = "form-group">
                <strong>End Date:</strong>
                {{ $conference->end_date }}
            </div>
        <div class = "col-xs-12 col-sm-12 col-md-12">
            <div class = "form-group">
                <strong>Visitors:</strong>
                {{ $conference->visitors }}
            </div>
        <div class = "col-xs-12 col-sm-12 col-md-12">
            <div class = "form-group">
                <strong>Location:</strong>
                {{ $conference->location }}
            </div>
</div>
</div>
</div>
</div>
</div>
</div>

@endsection