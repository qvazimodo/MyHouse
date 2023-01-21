<div class="top">
    <div id="logo-header"></div>
    <div class="top-right">
        <ul class="first_row">
{{--            <li><a href="news">Новости</a></li>--}}
{{--            <li><a href="rates">Тарифы и услуги</a></li>--}}
{{--            <li><a href="{{ route('serviced_houses') }}">Дома</a></li>--}}
{{--            <li><a href="{{ route('announcement') }}">Объявления</a></li>--}}
{{--            <li><a href="about">О нас</a></li>--}}


            <li><a href="news"><button class="btn first">Новости</button></a></li>
            <li><a href="rates"><button class="btn first">Тарифы и услуги</button></a></li>
            <li><a href="{{ route('serviced_houses') }}"><button class="btn first">Дома</button></a></li>
            <li><a href="{{ route('announcement') }}"><button class="btn first">Объявления</button></a></li>
            <li><a href="about"><button class="btn first">О нас</button></a></li>
</ul>
        <ul class="second_row">

            @guest
                @if (Route::has('register'))
{{--                    <li class="reg-btn"><a href="{{ route('register') }}">Регистрация</a></li>--}}
                    <li><a href="{{ route('register') }}"><button class="btn first">Регистрация</button></a></li>
                @endif
                @if (Route::has('login'))
{{--                    <li><a href="{{ route('login') }}">Вход</a></li>--}}
                        <li><a href="{{ route('login') }}"><button class="btn first">Вход</button></a></li>
                @endif
        @else
            @if (Auth::user()->is_admin )
{{--                        <li><a class="dropdown-item" href="{{ route('admin.clients.index') }}">Клиенты</a></li>--}}
{{--                        <li><a class="dropdown-item" href="{{ route('admin.employees') }}">Сотрудники</a></li>--}}
{{--                        <li><a class="dropdown-item" href="{{ route('admin.meters') }}">Счётчики</a></li>--}}
                    <li><a href="{{ route('admin.clients.index') }}"><button class="btn first">Клиенты</button></a></li>
                    <li><a href="{{ route('admin.employees') }}"><button class="btn first">Сотрудники</button></a></li>
                    <li><a href="{{ route('admin.meters') }}"><button class="btn first">Счётчики</button></a></li>
            @endif

                <li><a href="{{ route('userProfile') }}"><button class="btn first">Мой профиль</button></a></li>
{{--                        <li><a class="dropdown-item" href="{{ route('userProfile') }}">Мой профиль</a></li>--}}
                <li><a href="{{ route('usercards') }}"><button class="btn first">Мои объявления</button></a></li>
{{--                        <li><a class="dropdown-item" href="{{ route('usercards') }}">Мои объявления</a></li>--}}
{{--                {{ Auth::user()->name }}--}}

               <li><div class="btn first">{{ Auth::user()->name }}</div></li>
                <li><a href="{{ route('logout') }}">
                        <button class="btn first"
                           onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">
                            Выход
                        </button></a></li>
{{--                        <a class="dropdown-item" href="{{ route('logout') }}"--}}
{{--                           onclick="event.preventDefault();--}}
{{--                           document.getElementById('logout-form').submit();">--}}
{{--                            Выход--}}
{{--                        </a>--}}
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>

                    </li>
        </ul>
        @endguest
    </div>
 </div>






