
<nav class="navbar">
    <div class="navbar__wrap">
        <div class="hamb">
            <div class="hamb__field" id="hamb">
                <span class="bar"></span> <span class="bar"></span>
                <span class="bar"></span>
            </div>

        </div>
        <a href="landing">
            <div id="logo-header"></div>
        </a>
        <ul class="menu" id="menu">
            <li><a href="news">Новости</a></li>
            <li><a href="rates">Тарифы</a></li>
            <li><a href="serviced_houses">Дома</a></li>
            <li><a href="about">О нас</a></li>
            @guest
                @if (Route::has('login'))
                    <li><a href="{{ route('login') }}">Вход</a></li>
                @endif
                @if (Route::has('register'))
                    <li><a href=" {{ route('register') }}">Регистрация</a></li>
                @endif
            @else

                @if (Auth::user()->is_admin )
                    <li><a href="{{ route('admin.index') }}">Панель администратора</a></li>

                @else
                    <li><a href="announcement">Объявления</a></li>
                    <li><a href="{{ route('usercards') }}">Мои объявления</a></li>
                    <li><a href="{{ route('userProfile') }}">Мой профиль</a></li>
                    <li><a href="#"><img style="width: 50px; border-radius: 50%" src="/images/avatar.png"/></a></li>
                    <li><a href="#">{{ Auth::user()->name }}</a></li>
                @endif
                <li><a href="{{ route('logout') }}"
                       onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Выход</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">@csrf</form>
                </li>
            @endguest

        </ul>
    </div>
</nav>
<div class="popup" id="popup"></div>



