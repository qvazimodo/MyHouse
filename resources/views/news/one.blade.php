@extends('layouts.landing_layout')

@section('title', 'Новости')

@section('menu')
    <div id="wrapper">
        @include('Identically.menu')
    </div>
@endsection

@section('content')
    <div id="wrapper">
        <div class="news">
            <h2 class="title_name">Новости</h2>
            <div class="news_text">
                @if ($news)
                    <h2>{{ $news['title'] }}</h2>
                    <p>{{ $news['text'] }}</p><br>
                    <a href="{{ route('news.index') }}">Назад</a>
                @else
                <p>Нет такой новости</p>
                @endif
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
