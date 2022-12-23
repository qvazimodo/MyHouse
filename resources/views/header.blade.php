<div class="header">
    <div class="top">
        <div class="top-left">
            <div class="house"><a href="landing">MyHouse</a></div>
            <div class="residential">Управляющая Компания</div>
        </div>
        <div class="top-right">
            <div class="complex"><a href="about">О нас</a></div>
            <div class="district"><a href="#">Дома</a></div>
            <div class="catalog"><a href="#">Тарифы и услуги</a></div>
            @guest
                @if (Route::has('register'))
                    <div class="ipoteka"><a href="{{ route('register') }}">Регистрация</a></div>
                @endif
                @if (Route::has('login'))
                    <div class="contacts"><a href="{{route('login')}}">Вход</a></div>
                @endif

            @else
                @if (Auth::user()->is_admin )
                    <div class="ipoteka"><a href="{{route('admin.users.index')}}">Панель администратора</a></div>
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
                    </ul>
                </li>
            @endguest

        </div>
    </div>
    <div class="bottom">
        <div class="bottom-top">Ваше доверие - <br>наш профессионализм</div>
        <div class="bottom-contacts">
            <div class="sticker">
                <img src="{{asset('storage/images/sticker.png')}}">
                <div class="fontan">Наб. реки Фонтанки 10-15</div>
            </div>

            <div class="phone">
                <img src="{{asset('storage/images/phone.png')}}">
                <div class="num"> 8 (812) 123-45-67</div>
            </div>
        </div>
    </div>
</div>

