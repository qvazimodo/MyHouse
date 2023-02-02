@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

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
        <div id="passwordnew"></div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
