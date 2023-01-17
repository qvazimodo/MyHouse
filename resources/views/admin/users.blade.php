@extends('layouts.landing_layout')

@section('title', 'Клиенты компании')

@section('menu')
    @include('menu')
@endsection

@section('header')
    <div id="header"></div>
@endsection

@section('content')
    <div class="card container-fluid client ">
        <div class="card-body">
            <div class="row ">
                <h1 class="card-title text-center py-3 title-2 ">Перечень клиентов компании</h1>
                <div class="list-group  text-center py-3 client-content">
                    @forelse($users as $user)
{{--                        <a class="d-flex align-items-center justify-content-between px-3 list-group-item--}}
{{--                        list-group-item-action my-2 py-2 col-9 client-content"--}}
{{--                           href="{{ route('client.show', $client) }}"> </a>--}}
                            {{--                            <img class="d-block col-2 rounded-3" src="{{ $client->image_path }}" alt="{{ $client->title }}">--}}
                            <h5 class="col-md-auto client-txt title-3" >{{ $user->name }} {{ $user->patronymic }} {{ $user->last_name }}</h5>
                        @if (($user->is_client) || ($user->is_employee))
                            @if ($user->is_client)
                                <h5 class="col-md-auto title-3" >Клиент</h5>
                            @else
                                <h5 class="col-md-auto title-3" >Рабочий персонал</h5>
                            @endif
                        @else
                            <h5 class="col-md-auto title-3" >Не распределен</h5>
                        @endif
                    @empty
                        <div text-primary my-5 text-center fs-5>Клиентов нет</div>
                    @endforelse
                </div>
            </div>
            {{$users->links()}}
        </div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection

