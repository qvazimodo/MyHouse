@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('Identically.menu')
@endsection

@section('content')
    <div class="main">
    <div class="login-form-container">
        <h2 class="title_name mb-8 login-title">Вход в личный кабинет</h2>
        <form class="w-full max-w-sm" method="POST" action="{{ route('login') }}">
            @csrf
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 dark:text-white font-bold md:text-left mb-1 md:mb-0 pr-4"
                           for="email">
                        Email&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none "
                        id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email"
                        autofocus>
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 dark:text-white font-bold md:text-left mb-1 md:mb-0 pr-4"
                           for="password">
                        Пароль
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none "
                        type="password" id="password" name="password" required autocomplete="current-password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                    @enderror
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" name="remember"
                           id="remember" {{ old('remember') ? 'checked' : '' }}>
                    <span class="text-sm">
        Запомнить меня
      </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        class="bg-yellow-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Войти
                    </button>
                    @if (Route::has('passwordreq'))
                        <a class="inline-block align-baseline font-bold text-sm text-white hover:text-yellow-800 ml-12"
                           href="passwordreq">
                            Забыли пароль?
                        </a>
                    @endif
                </div>
            </div>
        </form>
    </div>
    <div class="login-end-form"></div>
    </div>

@endsection

@section('footer')
    @include('Identically.footer')
@endsection
