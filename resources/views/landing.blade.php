@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    <div id="wrapper">
         @include('Identically.menu')
    </div>
@endsection

@section('header')
    @include('Identically.header')
@endsection

@section('content')
    <div id="wrapper">
    @include('Content.flats')
    </div>
    @include('Content.watch')
    <div id="wrapper">
    @include('Content.video')
    @include('Content.reviews')
    @include('Content.map')
    </div>
    @include('Content.questions')
@endsection

@section('footer')
    <div id="wrapper">
    @include('Identically.footer')
    </div>
@endsection


