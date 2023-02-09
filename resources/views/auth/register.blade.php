@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('Identically.menu')
@endsection

@section('content')
    <div class="main">
    <div class="register-form">
        <h2 class="title_name">{{ __('Регистрация') }}</h2>
        <form method="POST" action="{{ route('register') }}">
            @csrf

            <div class=" register-element">
                <label for="name" class="register-txt">{{ __('Имя') }}</label>
                <input id="name" type="text" class="register-input @error('name') is-invalid @enderror" name="name"
                       value="{{ old('name') }}" required autocomplete="name" autofocus>

                @error('name')
                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                @enderror
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <label for="patronymic" class="register-txt">{{ __('Отчество') }}</label>
                <input id="patronymic" type="text" class="register-input @error('patronymic') is-invalid @enderror"
                       name="patronymic" value="{{ old('patronymic') }}">

                @error('name')
                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                @enderror
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <label for="last_name" class="register-txt">{{ __('Фамилия') }}</label>
                <input id="last_name" type="text" class="register-input @error('last_name') is-invalid @enderror"
                       name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name" autofocus>

                @error('name')
                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                @enderror
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <label for="email" class="register-txt">{{ __('Email') }}</label>
                <input id="email" type="email" class="register-input @error('email') is-invalid @enderror" name="email"
                       value="{{ old('email') }}" required autocomplete="email">

                @error('email')
                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                @enderror
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <label for="phone" class="register-txt">{{ __('Номер телефона') }}</label>
                <input id="phone" type="phone" class="register-input @error('phone') is-invalid @enderror" name="phone"
                       value="{{ old('phone') }}" required autocomplete="email">

                @error('phone')
                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                @enderror
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <label for="password" class="register-txt">{{ __('Пароль') }}</label>

                <div class="col-md-6">
                    <input id="password" type="password" class="register-input @error('password') is-invalid @enderror"
                           name="password" required autocomplete="new-password">

                    @error('password')
                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                    @enderror
                </div>
            </div>

            <div class="register-element">
                <label for="password-confirm" class="register-txt">{{ __('Повторите пароль') }}</label>
                <input id="password-confirm" type="password" class="register-input" name="password_confirmation"
                       required autocomplete="new-password">
                <div class="col-md-6">

                </div>
            </div>

            <div class="register-element">
                <button type="submit" class="register-btn">
                    {{ __('Зарегистрироваться') }}
                </button>
                <div class="col-md-6 offset-md-4">

                </div>
            </div>
        </form>
    </div>
    </div>
@endsection

@section('footer')
    @include('Identically.footer')
@endsection
