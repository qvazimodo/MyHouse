@extends('layouts.landing_layout')

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Личный кабинет</h2>
        <p class="cabinet-txt">Добро пожаловать, {{ $user }}!</p>

    </div>

    <div id="request"></div>

    <div id="meters"></div>

    <div class="end-cabinet"></div>
@endsection


@section('footer')
    @include('footer')
@endsection
