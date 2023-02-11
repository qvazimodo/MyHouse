@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
        @include('Identically.menu')
@endsection

@section('content')
<div class="userprofil">
    <h2 class="title_name">Личный кабинет</h2>
    <p class="cabinet-txt-title">Добро пожаловать, {{ $user }}!</p>

    <div id="request"></div>

    <div id="meters"></div>

    <div class="end-cabinet"></div>
</div>
@endsection


@section('footer')
    @include('Identically.footer')
@endsection
