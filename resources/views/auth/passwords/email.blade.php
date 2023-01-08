@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('content')
    <div class="login-form">
        <div class="container">
            <h2 class="title-2">Сброс пароля</h2>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form method="POST" action="{{ route('password.email') }}">
                    @csrf

                    <div class="login-element">

                        <label for="email" class="login-txt">{{ __('Email') }}</label>
                        <input id="email" type="email" class="login-input" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="login-element">

                        <button type="submit" class="login-btn reset-btn">
                            {{ __('Отправить ссылку для сброса пароля') }}
                        </button>

                    </div>
                </form>
        </div>
    </div>

@endsection

@section('footer')
    @include('footer')
@endsection
