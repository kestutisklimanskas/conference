<!DOCTYPE html>
<html lang="en">
<head>
  
    <title>Laravel app</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/app.js') }}"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</head>
<body>
    
    <h1><a href="{{ route('conferences.index') }}">Laravel app</a></h1>
    <div class="container" id="auth-container">
        @auth
            <p>Logged in as {{ auth()->user()->name }}</p>
            <form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit" class="btn btn-primary" id="logout-btn">Logout</button>
</form>
        @else
            <p>You are a Guest</p>
            <a id="loginButton" href="{{ route('login') }}" class="btn btn-primary">Login</a>
            <a id="registerButton" href="{{ route('register') }}" class="btn btn-secondary">Register</a>
        @endauth
        
    </div>
    <div class="container">
        @yield('content')
    </div>
  

</body>
</html>