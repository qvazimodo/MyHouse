@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
        @include('Content.about')
@endsection

@section('footer')
        @include('Identically.footer')
@endsection
