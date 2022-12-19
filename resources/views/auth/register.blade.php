@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="bottom-top">Регистрация</div>
    <div class="bottom-center-vector">
        <h1 class="residential">ФИО</h1> <input type="text" id="userAnswer">
        <h1 class="residential">Адрес</h1> <input type="text" id="userAnswer">
        <h1 class="residential">Номер Телефона</h1> <input type="number" id="userAnswer">
        <h1 class="residential">Почта</h1> <input type="email" id="userAnswer">
        <h1 class="residential">Пароль</h1> <input type="password" id="userAnswer"><br><br>
        <input class="bt" type="button" value="Зарегистрироваться" id="userAnswer">
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
