@extends('conferences.layout')


@section('content')

@auth
<div class="row">
    <div class="col-lg-12">
        <div class="pull-left">
            <h2>Edit Conference</h2>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('conferences.index') }}">Back</a>
        </div>
    </div>
</div>

@if ($errors->any())
    <div class="alert alert-danger">
        <strong>Whoops!</strong> There were some problems with your input.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('conferences.update',$conference->id) }}" method="POST">
    @csrf
    @method('PUT')

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Name:</strong>
                <input type="text" name="name" value="{{ $conference->name }}" class="form-control" placeholder="Name">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group
            ">
                <strong>Description:</strong>
                <textarea class="form-control" style="height:150px" name="description" placeholder="Description">{{ $conference->description }}</textarea>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group
            ">
                <strong>Start Date:</strong>
                <input type="date" name="start_date" value="{{ $conference->start_date }}" class="form-control" placeholder="Start Date">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group
            ">
                <strong>End Date:</strong>
                <input type="date" name="end_date" value="{{ $conference->end_date }}" class="form-control" placeholder="End Date">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group
            ">
                <strong>Location:</strong>
                <input type="text" name="location" value="{{ $conference->location }}" class="form-control" placeholder="Location">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group
            ">
                <strong>Visitors:</strong>
                <input type="number" name="visitors" value="{{ $conference->visitors }}" class="form-control" placeholder="Visitors">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>

        </div>
    </div>
    
@endauth
@guest
<div class="alert alert-danger">
    <strong>You need to log in to see this page.</strong>
@endguest
@endsection