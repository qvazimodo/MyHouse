@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    <div id="wrapper">
        @include('Identically.menu')
    </div>
@endsection

@section('header')
    <div id="header"></div>
@endsection

@section('content')
    <div id="wrapper">
{{--    <div class="container">--}}
        <h2 class="cabinet-title">Личный кабинет</h2>
        <p class="cabinet-txt">Добро пожаловать, {{ $user }}!</p>

{{--    </div>--}}

    <div id="request"></div>

    <div id="meters"></div>

    <div class="end-cabinet"></div>
    </div>
@endsection


@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
