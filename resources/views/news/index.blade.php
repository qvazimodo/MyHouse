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
                @forelse($news as $item)
                    <a href="{{ route('news.show', $item['id']) }}">{{ $item['title'] }}</a><br>
                @empty
                    <p>Нет новостей</p>
                @endforelse
            </div>
        </div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
