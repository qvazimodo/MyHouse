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
        @else
            @if (Auth::user()->is_admin )
                        <li><a class="dropdown-item" href="{{ route('admin.clients.index') }}">Клиенты</a></li>
                        <li><a class="dropdown-item" href="{{ route('admin.employees') }}">Сотрудники</a></li>
                        <li><a class="dropdown-item" href="{{ route('admin.meters') }}">Счётчики</a></li>
            @endif
                        <li><a class="dropdown-item" href="{{ route('userProfile') }}">Мой профиль</a></li>
                        <li><a class="dropdown-item" href="{{ route('usercards') }}">Мои объявления</a></li>
                {{ Auth::user()->name }}

                    <li>
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">
                            Выход
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>

                    </li>
        </ul>
        @endguest
    </div>
 </div>






