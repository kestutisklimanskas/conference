<!-- resources/views/layouts/app.blade.php -->
 <!DOCTYPE html>
<html lang="en">
<head>
    <title>Laravel app</title>
    <link href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel = "stylesheet">
</head>
    <body>
        @section('sidebar')
            This is the master sidebar.
        @show
 <h1>Laravel app</h1>
        <div class="container">
            @yield('content')
        </div>

    </body>
</html>