@extends('layouts.landing_layout')

@section('title', "Профиль пользователя")

@section('header')
    @include('header')
@endsection

@section('menu')
    @include('menu')
@endsection

@section('content')
    <div class="card container-lg d-flex align-items-center justify-content-center py-5 client">
        <div class="card text-center col-md-8 client ">
            <div class="card-header title-2">
                Профиль клиента компании
            </div>

            @if($client)
                <div class="card-body py-5 ">
                    <p class="card-title title-2">{{ $user->name }} {{ $user->patronymic }} {{ $user->last_name }}</p>

                    <div class="card-text">
                        <h3 class = "title-2">Адрес</h3>
                        <p class="fs-4 title-2" >Улица {{ $client->street }}</p>
                        <p class="fs-4 title-2">Дом № {{ $client->house_number }} {{$client->letter ? $client->letter : ''}}</p>
                        <p class="fs-4 title-2">Подъезд № {{ $client->entrance }}</p>
                        <p class="fs-4 title-2">Этаж № {{ $client->floor }}</p>
                        <p class="fs-4 title-2">Квартира № {{ $client->apartment_number }}</p>
                        <p class="fs-4 title-2">Количество проживающих {{ $client->residents_number }}</p>
                        <p class="fs-4 title-2">Адрес электронной почты {{ $client->user->email }}</p>
                    </div>
                </div>
            @else
                <div class="card-body py-5">
                    <div class="card-text fs-3 title-2">
                        <p>Не существует клиента с таким id!</p>
                    </div>
                </div>

            @endif
            <div class="card-footer text-muted">

            </div>
        </div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection

