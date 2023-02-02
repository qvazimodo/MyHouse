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
        <h2 class="title_name">Дома на обслуживании</h2>
        <div id="admin__houses"></div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
