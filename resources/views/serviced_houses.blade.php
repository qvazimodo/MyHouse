@extends('layouts.landing_layout')

@section('title', 'Мы обслуживаем дома')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
        <div id="housesList"></div>
@endsection

@section('footer')
        @include('Identically.footer')
@endsection
