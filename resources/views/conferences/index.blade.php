@extends('conferences.layout')

@section('content')

<div class = "row">
    <div class = "col-lg-12">
        <div class = "pull-left">
            <h2>Conferences</h2>
        </div>
        <div class = "pull-right">
        <div class="pull-right">

            @auth
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addConferenceModal">Add new Conference</button>
    @endauth
</div>
        </div>
    </div>
</div>
@if ($message = Session::get('success'))
    <div class = "alert alert-success">
        <p>{{ $message }}</p>
    </div>
@endif
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
<table class="table table-bordered">
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Visitors</th>
        <th>Location</th>
        <th width="280px">Action</th>
    </tr>
    @foreach ($conferences as $conference)
        <tr>
            <td>{{ $conference->name }}</td>
            <td>{{ $conference->description }}</td>
            <td>{{ $conference->start_date }}</td>
            <td>{{ $conference->end_date }}</td>
            <td>{{ $conference->visitors }}</td>
            <td>{{ $conference->location }}</td>
            <td>
                <form action="{{ route('conferences.destroy',$conference->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('conferences.show',$conference->id) }}">Show</a>
                    @auth
                    <a class="btn btn-primary" href="{{ route('conferences.edit',$conference->id) }}">Edit</a>
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">Delete</button>
                   @endauth
                </form>
            </td>
        </tr>
    @endforeach
</table>

<div class="modal" id="addConferenceModal" tabindex="-1" role="dialog" aria-labelledby="addConferenceModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addConferenceModalLabel">Add new Conference</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">                
                <form action="{{ route('conferences.store') }}" method="POST">
                    @csrf
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="name" class="form-control" placeholder="Name">
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group ">
            <strong>Description:</strong>
            <textarea class="form-control" style="height:150px" name="description" placeholder="Description"></textarea>

        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Start Date:</strong>
            <input type="date" name="start_date" class="form-control" placeholder="Start Date">
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>End Date:</strong>
            <input type="date" name="end_date" class="form-control" placeholder="End Date">
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Location:</strong>
            <input type="text" name="location" class="form-control" placeholder="Location">
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Visitors:</strong>
            <input type="number" name="visitors" class="form-control" placeholder="Visitors">
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>

                </form>
            </div>
            
        </div>
    </div>
</div>

@endsection