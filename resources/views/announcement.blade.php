@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('menu')
@endsection

@section('header')
    <div id="header"></div>
@endsection

@section('content')
    <div id="listCards"></div>
@endsection

@section('footer')
    @include('footer')
@endsection
