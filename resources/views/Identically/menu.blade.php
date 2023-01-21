<div class="top">
    <div id="logo-header"></div>
    <div class="top-right">
        <ul>
            <li><a href="news">Новости</a></li>
            <li><a href="rates">Тарифы и услуги</a></li>
            <li><a href="{{ route('serviced_houses') }}">Дома</a></li>
            <li><a href="{{ route('announcement') }}">Объявления</a></li>
            <li><a href="about">О нас</a></li>
            @guest
                @if (Route::has('register'))
                    <li class="reg-btn"><a href="{{ route('register') }}">Регистрация</a></li>
                @endif
                @if (Route::has('login'))
                    <li><a href="{{ route('login') }}">Вход</a></li>
                @endif
        </ul>
        @else
            @if (Auth::user()->is_admin )
                <li>
                    <a class="nav-link" href="{{ route('admin.houses') }}" role="button"
                       aria-expanded="false">
                        Дома на обслуживании</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">
                        Панель администратора</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{ route('admin.clients.index') }}">Клиенты</a></li>
                        <li><a class="dropdown-item" href="{{ route('admin.employees') }}">Сотрудники</a></li>
                        <li><a class="dropdown-item" href="{{ route('admin.meters') }}">Счётчики</a></li>
                    </ul>
                </li>

            @endif
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                   aria-expanded="false">
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






