@extends('layouts.landing_layout')

@section('header')
    @include('header')
@endsection

@section('menu')
    @include('menu')
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Счётчики</h2>
        <div id="admin_meters"></div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
