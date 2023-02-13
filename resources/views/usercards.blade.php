@extends('layouts.landing_layout')

@section('title', 'Объявления')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
    <div id="usercards"></div>
@endsection

@section('footer')
        @include('Identically.footer')
@endsection
