@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('content')
<div class="login-form">
    <div class="container">
        <h2 class="title-2">Вход в личный кабинет</h2>
        <form method="POST" action="{{ route('login') }}">
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
                <label for="password" class="login-txt">{{ __('Пароль') }}</label>


                <input id="password" type="password" class="login-input" name="password" required autocomplete="current-password">

                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

            </div>

            <div class="login-element">

                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                <label class="remember-txt" for="remember">
                    {{ __('Запомнить меня') }}
                </label>

            </div>

            <div class="login-element">

                <button type="submit" class="login-btn">
                    {{ __('Войти') }}
                </button>

                @if (Route::has('password.request'))
                    <a class="password-txt" href="{{ route('password.request') }}">
                        {{ __('Забыли пароль?') }}
                    </a>
                @endif

            </div>
        </form>
    </div>
    <div id="example"></div>
</div>

@endsection

@section('footer')
    @include('footer')
@endsection
