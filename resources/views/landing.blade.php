@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('Identically.menu')
@endsection

@section('header')
    @include('Identically.header')
@endsection

@section('content')
    <div class="main">
        @include('Content.flats')
        @include('Content.watch')
        @include('Content.video')
        @include('Content.reviews')
        @include('Content.map')
        @include('Content.questions')
    </div>
@endsection

@section('footer')
    @include('Identically.footer')
@endsection


