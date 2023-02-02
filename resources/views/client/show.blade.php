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
    <div id="wrapper" >
    <div class="card container-lg d-flex align-items-center justify-content-center py-5 client" style="background: #242B33">
        <div class="card text-center col-md-8 client" style="background: #242B33">
            <div class="card-header title_name">Профиль клиента компании</div>

            @if($client)
                <div class="card-body py-5 ">
                    <p class="card-title title_name">{{ $user->name }} {{ $user->patronymic }} {{ $user->last_name }}</p>

                    <div class="card-text">
                        <h3 class = "title_name">Адрес</h3>
                        <p class="fs-4 title_name" >Улица {{ $client->street }}</p>
                        <p class="fs-4 title_name">Дом № {{ $client->house_number }} {{$client->letter ? $client->letter : ''}}</p>
                        <p class="fs-4 title_name">Подъезд № {{ $client->entrance }}</p>
                        <p class="fs-4 title_name">Этаж № {{ $client->floor }}</p>
                        <p class="fs-4 title_name">Квартира № {{ $client->apartment_number }}</p>
                        <p class="fs-4 title_name">Количество проживающих {{ $client->residents_number }}</p>
                        <p class="fs-4 title_name">Адрес электронной почты: {{ $client->user->email }}</p>
                    </div>
                </div>
            @else
                <div class="card-body py-5">
                    <div class="card-text fs-3 title_name">
                        <p>Не существует клиента с таким id!</p>
                    </div>
                </div>

            @endif
            <div class="card-footer text-muted">

            </div>
        </div>
    </div>
    </div>
@endsection

@section('footer')
    <div id="wrapper">
        @include('Identically.footer')
    </div>
@endsection
