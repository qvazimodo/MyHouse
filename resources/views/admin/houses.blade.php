@extends('layouts.landing_layout')


@section('title', 'Дома на обслуживании')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
    <div class="container">
        <h2 class="title_name">Дома на обслуживании</h2>
        <div id="admin__houses"></div>
    </div>
@endsection

@section('footer')
        @include('Identically.footer')
@endsection
