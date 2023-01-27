<header class="header">
    <div class="container">
        <div class="header__body">
            <div id="logo-header"></div>
            <div class="header__burger">
                <span></span>
            </div>
            <nav class="header__menu">
                <ul class="header__list">
                    <li><a href="/news" class="header__link">Новости</a></li>
                    <li><a href="/rates" class="header__link">Тарифы</a></li>
                    <li><a href="/serviced_houses" class="header__link">Дома</a></li>
                    <li><a href="/announcement" class="header__link">Объявления</a></li>
                    <li><a href="/about" class="header__link">О нас</a></li>
                </ul>
                @guest
                    @if (Route::has('register'))
                        <ul class="header__list">
                            <li class="reg-btn"><a href="{{ route('register') }}" class="header__link">Регистрация</a>
                            </li>
                            @endif
                            @if (Route::has('login'))
                                <li><a href="{{ route('login') }}" class="header__link">Вход</a></li>
                            @endif
                            @else

                                @if (Auth::user()->is_admin )
                                    <ul class="header__list">
                                        <li>
                                            <a class="nav-link" href="{{ route('admin.index') }}" role="button"
                                               aria-expanded="false">
                                                Панель администратора</a>
                                        </li>
                                    </ul>
                                 @else
                                    <ul class="header__list">
                                        <li><a href="{{ route('usercards') }}" class="header__link">Мои объявления</a>
                                        </li>
                                        <li><a href="{{ route('userProfile') }}" class="header__link">Мой профиль</a>
                                        </li>
                                        <li>{{ Auth::user()->name }}</li>
                                    </ul>
                                @endif

                                    <ul class="header__list">
                                        <li><a class="dropdown-item" href="{{ route('logout') }}"
                                               onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">Выход</a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                                  class="d-none">@csrf</form>
                                        </li>
                                    </ul>
                            @endguest
                        </ul>
            </nav>
        </div>
    </div>
</header>



