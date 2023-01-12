@extends('layouts.landing_layout')

@section('header')
    @include('header')
@endsection

@section('menu')
    @include('menu')
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Список сотрудников</h2>
        <div id="employees-list"></div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
