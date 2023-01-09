@extends('layouts.landing_layout')

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Мы обслуживаем дома</h2>
        <div id="houses-list"></div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
