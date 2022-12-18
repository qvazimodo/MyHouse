@extends('layouts.landing_layout')

@section('title', 'Клиенты компании')

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="card container-fluid client ">
        <div class="card-body">
            <div class="row ">
                <h1 class="card-title text-center py-3 title-2 ">Перечень клиентов компании</h1>
                <div class="list-group  text-center py-3 client-content">
                    @forelse($clients as $client)
                        <a class="d-flex align-items-center justify-content-between px-3 list-group-item
                        list-group-item-action my-2 py-2 col-9 client-content"
                           href="{{ route('client.show', $client) }}">
{{--                            <img class="d-block col-2 rounded-3" src="{{ $client->image_path }}" alt="{{ $client->title }}">--}}
                            <h5 class="col-md-auto client-txt" >{{ $client->name }} {{ $client->patronymic }} {{ $client->last_name }}</h5>
                            <h5 class="col-md-auto" >Улица {{ $client->street }}, дом № {{ $client->house_number }}
                                {{$client->letter ? $client->letter : ''}}, квартира № {{ $client->apartment_number
                                }}</h5>
                        </a>
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
