@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('menu')
    @include('Identically.menu')
@endsection

@section('content')
    <div class="main">
        <div class="register-form-container">
            <h2 class="title_name">{{ __('Регистрация') }}</h2>

            <form class="w-full max-w-xl" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="flex flex-wrap -mx-3 mb-10">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="name">
                            Имя
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('name') is-invalid @enderror"
                               id="name" type="text" name="name"
                               value="{{ old('name') }}" required autocomplete="name" autofocus>
                        @error('name')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="last_name">
                            Фамилия
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('last_name') is-invalid @enderror"
                               id="last_name" type="text" name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name" autofocus>
                        @error('name')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="patronymic">
                            Отчество
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('patronymic') is-invalid @enderror"
                               id="patronymic" type="text" name="patronymic" value="{{ old('patronymic') }}">
                        @error('name')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-10">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('email') is-invalid @enderror"
                               id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email">
                        @error('email')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="phone">
                            Номер телефона
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('phone') is-invalid @enderror"
                               id="phone" type="phone" name="phone" value="{{ old('phone') }}" required autocomplete="email">
                        @error('phone')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="password">
                            Пароль
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none @error('password') is-invalid @enderror"
                               id="password" type="password" name="password" required autocomplete="new-password">
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                        @enderror
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="password-confirm">
                            Повторите пароль
                        </label>
                        <input class="bg-transparent appearance-none border-b border-yellow-600 w-full py-2 px-4 text-stone-200 leading-tight focus:outline-none"
                               id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password">
                    </div>
                </div>

                <div class="md:w-2/3">
                    <button
                        class="bg-yellow-800 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('footer')
    @include('Identically.footer')
@endsection
