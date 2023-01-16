@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')


@section('header')
    <div id="header"></div>
@endsection

@section('menu')
    @include('menu')
@endsection

@section('content')
    <div id="contacts"></div>
@endsection

@section('footer')
    @include('footer')
@endsection
