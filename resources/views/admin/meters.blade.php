@extends('layouts.landing_layout')


@section('title', 'Счётчики')

@section('menu')
    @include('Identically.menu')
@endsection

@section('content')
    <div class="container">
        <h2 class="title-2">Счётчики</h2>
        <div id="admin__meters"></div>
    </div>
@endsection

@section('footer')
    @include('Identically.footer')
@endsection
