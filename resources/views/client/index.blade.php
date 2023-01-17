@extends('layouts.landing_layout')

@section('title', 'Клиенты компании')

@section('menu')
    @include('menu')
@endsection

@section('header')
    <div id="header"></div>
@endsection


{{--@dd($clients)--}}
@section('content')
    <div class="card container-fluid client ">
        <div class="card-body">
            <div class="row ">
                <h1 class="carmeter_valuesd-title text-center py-3 title-2 ">Перечень клиентов компании</h1>
                <div class="container list-group  text-center py-3 client-content">
                    @forelse($clients as $client)
                        <div class="d-flex align-items-center">
                            <a class="w-75 rounded-3
                        list-group-item-action my-2 py-2 col-9 client-content"
                               href="{{ route('admin.clients.show', $client) }}">

                               <p class="d-flex col-md-auto client-txt display-6 p-3 mb-0">
                                    {{ $client->user->name }} {{ $client->user->patronymic }} {{ $client->user->last_name }}</p>
                            </a>


                            <div class="d-flex flex-column  text-white-50 w-50">
                                <div class="col-md-auto">Номер телефона:
                                    <a href="tel:{{ $client->user->phone}}">{{ $client->user->phone}}</a></div>
                                <div>Адрес электронной почты:
                                    <a href="mailto:{{ $client->user->email }}">{{ $client->user->email }}</a>
                                </div>
                            </div>
                        </div>

                    @empty
                        <div text-primary my-5 text-center fs-5>Клиентов нет</div>
                    @endforelse
                </div>
            </div>
            {{$clients->links()}}
        </div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
