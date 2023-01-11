@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('flats')
    @include('flats')
@endsection

@section('content')
    <div id="place"></div><hr>
    <div id="watch"></div>
    <div id="video"></div><hr>
    <div id="reviews"></div>

     <div class="content-map">
        <div class="map">Наши дома на карте</div>
        <div class="map-bottom">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21407.318285786212!2d37.786594794605456!3d55.66869344885885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1671045621030!5m2!1sru!2sru"
                max-width="1300" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

     <div id="questions"></div>
         <hr>
    </div>

@endsection

@section('footer')
    @include('footer')
@endsection
