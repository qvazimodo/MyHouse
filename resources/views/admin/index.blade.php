@extends('layouts.landing_layout')


@section('title', 'My House Управляющая компания')

@section('menu')
    <div id="wrapper">
        @include('Identically.menu')
    </div>
@endsection

@section('header')
    {{--    @include('Identically.header')--}}
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Панель администратора</h2>
        <div id="admin"></div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
