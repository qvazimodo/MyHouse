@extends('layouts.landing_layout')

@section('title', 'Тарифы')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
        @include('Content.rates')
@endsection

@section('footer')
        @include('Identically.footer')
@endsection
