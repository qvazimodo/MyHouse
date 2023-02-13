<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@section('title')@show</title>

    <!-- Fonts -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet">


    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss','resources/js/app.jsx'])

</head>

<body>
<div id="wrapper">
@yield('menu')
@yield('header')
@yield('content')
@yield('footer')
</div>
</body>
</html>
