<nav class="relative px-4 py-4 flex justify-between items-center bg-white"
     style="
     background: #242B33;
     display: flex;
     justify-content: space-between;
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      width: 100%;
      z-index: 1;
    ">
    <div id="logo-header"></div>

    <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-600 p-3" style="color: #FFFFFF">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    </div>

    <ul style="height: 50px;
    padding-right: 195px;
"

        class="hidden absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:jc">
        <li class="mb-1">
            <a style="color: #FFFFFF;" onmouseover="this.style.color='black';" onmouseout="this.style.color='white';"
               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
               href="news">Новости</a>
        </li>
        <li class="mb-1">
            <a style="color: #FFFFFF;" onmouseover="this.style.color='black';" onmouseout="this.style.color='white';"
               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
               href="rates">Тарифы</a>
        </li>
        <li class="mb-1">
            <a style="color: #FFFFFF;" onmouseover="this.style.color='black';" onmouseout="this.style.color='white';"
               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
               href="serviced_houses">Дома</a>
        </li>

        <li style="width: 72px" class="mb-1">
            <a style="color: #FFFFFF;" onmouseover="this.style.color='black';" onmouseout="this.style.color='white';"
               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
               href="about">О нас</a>
        </li>

        @guest
            @if (Route::has('login'))
                <li class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="{{ route('login') }}">Вход</a>
                </li>
            @endif
            @if (Route::has('register'))
                <li class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="{{ route('register') }}">Регистрация</a>
                </li>
            @endif
        @else
            @if (Auth::user()->is_admin )
                <li style="width: 207px" class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="{{ route('admin.index') }}" role="button" aria-expanded="false">Панель администратора</a>
                </li>
            @else
                <li class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="announcement">Объявления</a>
                </li>
                <li style="width: 151px" class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="{{ route('usercards') }}">Мои объявления</a>
                </li>
                <li style="width: 128px" class="mb-1">
                    <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                       onmouseout="this.style.color='white';"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="{{ route('userProfile') }}">Мой кабинет</a>
                </li>
                <li style="width: 128px; margin-right: -80px;" class="mb-1">
                    <img style="width: 50px; border-radius: 50%" src="/images/avatar.png" />
                </li>
                <li class="mb-1">
                    <a style="color: #FFFFFF;"
                       class="block p-4 text-sm font-semibold text-gray-400">
                       {{ Auth::user()->name }}</a>
                </li>



            @endif
            <li class="mb-1">
                <a style="color: #FFFFFF;" onmouseover="this.style.color='black';"
                   onmouseout="this.style.color='white';"
                   class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                   href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">Выход</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST">@csrf</form>
            </li>

        @endguest
    </ul>
</nav>

<div class="navbar-menu relative z-50 hidden">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
         style="width: 100%">
        <div class="flex items-center mb-8">
            <a style="visibility: hidden"
               class="mr-auto text-3xl font-bold leading-none" href="#">
                <svg class="h-12" alt="logo" viewBox="0 0 100 100">
                    <path
                        d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                </svg>
            </a>
            <button class="navbar-close">
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <div>
            <ul>
                <li class="mb-1">
                    <a style="color: black"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="landing">Главная</a>
                </li>
                <li class="mb-1">
                    <a style="color: black"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="news">Новости</a>
                </li>
                <li class="mb-1">
                    <a style="color: black"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="rates">Тарифы</a>
                </li>
                <li class="mb-1">
                    <a style="color: black"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="serviced_houses">Дома</a>
                </li>

                <li class="mb-1">
                    <a style="color: black"
                       class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                       href="about">О нас</a>
                </li>
                @guest

                    <div class="mt-auto">
                        <div class="pt-6">
                            @if (Route::has('login'))
                                <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                                   href="{{ route('login') }}">Вход</a>
                            @endif
                            @if (Route::has('register'))
                                <a style="background: black"
                                   class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                                   href="{{ route('register') }}">Регистрация</a>
                            @endif
                        </div>
                    </div>

                @else
                    @if (Auth::user()->is_admin )
                        <li class="mb-1">
                            <a style="color: black"
                               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                               href="{{ route('admin.index') }}" role="button" aria-expanded="false">
                                Панель администратора</a>
                        </li>
                    @else
                        <li class="mb-1">
                            <a style="color: black"
                               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                               href="announcement">Объявления</a>
                        </li>
                        <li class="mb-1">
                            <a style="color: black"
                               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                               href="{{ route('usercards') }}">Мои объявления</a>
                        </li>
                        {{--                        <li class="mb-1">--}}
                        {{--                            <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="{{ route('userProfile') }}">Мой профиль</a>--}}
                        {{--                        </li>--}}
                        <li class="mb-1">
                            <a style="color: black"
                               class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                               href="{{ route('userProfile') }}">{{ Auth::user()->name }}</a>
                        </li>
                    @endif
                    <li class="mb-1">
                        <a style="color: black"
                           class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">Выход</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST">@csrf</form>
                    </li>
                @endguest
            </ul>
        </div>
    </nav>
</div>
