<nav>
    <div class="top">
        <div class="top-left">
            <div class="house"><a href="landing">MyHouse</a></div>
            <div class="residential">Управляющая Компания</div>
        </div>
        <div class="top-right">
            <ul id="navbar">
                <li><a href="rates">Тарифы и услуги</a></li>
                <li><a href="{{ route('serviced_houses') }}">Дома</a></li>
                <li><a href="{{ route('announcement') }}">Объявления</a></li>
                <li><a href="about">О нас</a></li>
            </ul>
        </div>
{{--                <li><a href="#">Регистрация</a></li>--}}
{{--                <li><a href="#">Вход</a></li>--}}

{{--            <div class="complex"><a href="about">О нас</a></div>--}}
{{--            <div class="complex"><a href="{{ route('announcement') }}">Объявления</a></div>--}}
{{--            <div class="district"><a href="{{ route('serviced_houses') }}">Дома</a></div>--}}
{{--            <div class="catalog"><a href="rates">Тарифы и услуги</a></div>--}}
        <div class="top-right-two">
            @guest
                @if (Route::has('register'))
                        <li class="reg-btn"><a href="{{ route('register') }}">Регистрация</a></li>
                @endif
                @if (Route::has('login'))
                        <li><a href="{{route('login')}}">Вход</a></li>
                @endif

            @else
                @if (Auth::user()->is_admin )

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                            Панель администратора</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('admin.clients.index') }}">Клиенты</a></li>
                            <li><a class="dropdown-item" href="{{ route('admin.employees') }}">Сотрудники</a></li>
                            {{--                            <li><a class="dropdown-item" href="{{ route('admin.users.index') }}">Все пользователи</a></li>--}}
                        </ul>
                    </li>

                @endif
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        {{ Auth::user()->name  }}</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();"> Выход</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form> </li>
                        <li><a class="dropdown-item" href="{{ route('userProfile') }}">Мой профиль</a></li>
                        <li><a class="dropdown-item" href="{{ route('usercards') }}">Мои объявления</a></li>
                    </ul>
                </li>
            @endguest
        </div>

    </div>

</nav>




