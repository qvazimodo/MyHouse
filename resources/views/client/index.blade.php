@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    <div id="wrapper">
        @include('Identically.menu')
    </div>
@endsection

{{--@section('header')--}}
{{--    @include('Identically.header')--}}
{{--@endsection--}}

@section('content')
    <div id="wrapper">
        <div class="client">
         <div class="title_name" style="text-align: center">Перечень клиентов компании</div>

        @forelse($clients as $client)
                <div class="client-name">
                    <a class="client-name_link" href="{{ route('admin.clients.show', $client) }}">{{ $client->user->name }} {{ $client->user->patronymic }} {{ $client->user->last_name }}</a>
                </div>

                <div class="client-data">
                    <div>Номер телефона: <a class="client-data_link" href="tel:{{ $client->user->phone}}">{{ $client->user->phone}}</a></div>
                    <div>Адрес электронной почты: <a class="client-data_link" href="mailto:{{ $client->user->email }}">{{ $client->user->email }}</a></div>
                </div>
                    @empty
                        <div>Клиентов нет</div>
                    @endforelse
            {{$clients->links()}}
    </div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
