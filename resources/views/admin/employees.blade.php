@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('Identically.menu')
@endsection

@section('content')
    <div class="container">
        <div id="employees"></div>
    </div>
@endsection

@section('footer')
    @include('Identically.footer')
@endsection
