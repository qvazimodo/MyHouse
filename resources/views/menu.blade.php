<div class="header-two">
    <div class="top">
        <div class="top-left">
            <div class="house"><a href="landing">MyHouse</a></div>
            <div class="residential">Управляющая Компания</div>
        </div>
        <div class="top-right">
            <div class="complex"><a href="about">О нас</a></div>
            <div class="complex"><a href="{{ route('announcement') }}">Объявления</a></div>
            <div class="district"><a href="{{ route('serviced_houses') }}">Дома</a></div>
            <div class="catalog"><a href="rates">Тарифы и услуги</a></div>
            @guest
                @if (Route::has('register'))
                    <div class="ipoteka"><a href="{{ route('register') }}">Регистрация</a></div>
                @endif
                @if (Route::has('login'))
                    <div class="contacts"><a href="{{route('login')}}">Вход</a></div>
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

</div>




