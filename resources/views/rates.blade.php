@extends('layouts.landing_layout')

@section('title', 'Тарифы')

@section('menu')
    <div id="wrapper">
        @include('Identically.menu')
    </div>
@endsection

{{--@section('header')--}}
{{--    @include('Identically.header')--}}
{{--@endsection--}}

@section('content')
    <div id="wrapper">
        @include('Content.rates')
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
