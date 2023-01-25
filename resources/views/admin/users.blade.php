{{--@extends('layouts.landing_layout')--}}

{{--@section('title', 'My House Управляющая компания')--}}

{{--@section('menu')--}}
{{--    <div id="wrapper">--}}
{{--        @include('Identically.menu')--}}
{{--    </div>--}}
{{--@endsection--}}

{{--@section('header')--}}
{{--    @include('Identically.header')--}}
{{--@endsection--}}

{{--@section('content')--}}
{{--    <div class="card container-fluid client ">--}}
{{--        <div class="card-body">--}}
{{--            <div class="row ">--}}
{{--                <h2 class="title_name ">Перечень клиентов компании</h2>--}}
{{--                <div class="list-group  text-center py-3 client-content">--}}
{{--                    @forelse($users as $user)--}}
{{--                            <h5 class="col-md-auto client-txt title-3" >{{ $user->name }} {{ $user->patronymic }} {{ $user->last_name }}</h5>--}}
{{--                        @if (($user->is_client) || ($user->is_employee))--}}
{{--                            @if ($user->is_client)--}}
{{--                                <h5 class="col-md-auto title-3" >Клиент</h5>--}}
{{--                            @else--}}
{{--                                <h5 class="col-md-auto title-3" >Рабочий персонал</h5>--}}
{{--                            @endif--}}
{{--                        @else--}}
{{--                            <h5 class="col-md-auto title-3" >Не распределен</h5>--}}
{{--                        @endif--}}
{{--                    @empty--}}
{{--                        <div text-primary my-5 text-center fs-5>Клиентов нет</div>--}}
{{--                    @endforelse--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            {{$users->links()}}--}}
{{--        </div>--}}
{{--    </div>--}}
{{--@endsection--}}

{{--@section('footer')--}}
{{--    <div id="wrapper">--}}
{{--        @include('Identically.footer')--}}
{{--    </div>--}}
{{--@endsection--}}
