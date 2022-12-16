@extends('layouts.landing_layout')

@section('title', "Профиль пользователя")

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="card container-lg d-flex align-items-center justify-content-center py-5">
        <div class="card text-center col-md-8">
            <div class="card-header">
                Профиль пользователя
            </div>

            @if($client)
                <div class="card-body py-5">
                    <p class="card-title">{{ $client->name }}</p>
                    <p class="card-title">{{ $client->patronymic }}</p>
                    <p class="card-title">{{ $client->last_name }}</p>
                    <div class="card-text">
                        <h3>Адрес</h3>
                        <p class="fs-4">Улица {{ $client->street }}</p>
                        <p class="fs-4">Дом № {{ $client->house_number }} {{$client->letter ? $client->letter : ''}}</p>
                        <p class="fs-4">Подъезд № {{ $client->entrance }}</p>
                        <p class="fs-4">Этаж № {{ $client->floor }}</p>
                        <p class="fs-4">Квартира № {{ $client->apartment_number }}</p>
                        <p class="fs-4">Количество проживающих {{ $client->residents_number }}</p>
                        <p class="fs-4">Адрес электронной почты {{ $client->email }}</p>
                    </div>
                </div>
            @else
                <div class="card-body py-5">
                    <div class="card-text fs-3">
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

