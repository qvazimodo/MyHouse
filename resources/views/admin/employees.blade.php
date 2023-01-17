@extends('layouts.landing_layout')

@section('menu')
    @include('menu')
@endsection

@section('header')
    <div id="header"></div>
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Сотрудники</h2>
        <div id="employees"></div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
