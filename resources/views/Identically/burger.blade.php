<div class="top">
    <div id="logo-header"></div>
<input type="checkbox" id="active">
<label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
<div class="wrapper">
    <ul>
        <li><a href="news">НОВОСТИ</a></li>
        <li><a href="rates">ТАРИФЫ</a></li>
        <li><a href="{{ route('serviced_houses') }}">ДОМА</a></li>
        <li><a href="{{ route('announcement') }}">ОБЪЯВЛЕНИЯ</a></li>
        <li><a href="about">О НАС</a></li>
        @guest
        @if (Route::has('register'))
                <li><a href="{{ route('register') }}">РЕГИСТРАЦИЯ</a></li>
        @endif
            @if (Route::has('login'))
                <li><a href="{{ route('login') }}">ВХОД</a></li>
            @endif
        @else
            @if (Auth::user()->is_admin )
                <li><a href="{{ route('admin.clients.index') }}">КЛИЕНТЫ</a></li>
                <li><a href="{{ route('admin.employees') }}">СОТРУДНИКИ</a></li>
                <li><a href="{{ route('admin.meters') }}">СЧЕТЧИКИ</a></li>
            @endif
                <li><a href="{{ route('userProfile') }}">МОЙ ПРОФИЛЬ</a></li>
                <li><a href="{{ route('usercards') }}">МОИ ОБЪЯВЛЕНИЯ</a></li>


            <li><a href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">
                        ВЫХОД
                    </a></li>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
                <li><a href="#">{{ Auth::user()->name }}</a></li>
    @endguest
    </ul>
</div>
</div>
