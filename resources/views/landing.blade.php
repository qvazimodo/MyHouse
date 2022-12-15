//Использует в качестве основы файл resources/views/layouts/landing_layout.blade.php
@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    //подключение меню нашего landing из файла resources/views/landing_header.blade.php, который необходимо создать
    @include('landing_header')
@endsection

@section('content')

    Сюда нужно вставить вёрстку основного контента лендинга

@endsection

@section('footer')
    //подключение footer из файла resources/views/landing_footer.blade.php, который необходимо создать
    @include('landing_footer')
@endsection
