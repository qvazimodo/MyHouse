//Использует в качестве основы файл resources/views/layouts/landing_layout.blade.php
@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    //подключение меню нашего landing из файла resources/views/landing_header.blade.php, который необходимо создать
{{--    @include('landing_header')--}}
@endsection

@section('content')

    <div class="header">
        <div class="top">
            <div class="top-left">
                <div class="house">MyHouse</div>
                <div class="residential">ЖИЛОЙ КОМПЛЕКС</div>
            </div>
            <div class="top-right">
                <div class="complex"><a href="#">О комплексе</a></div>
                <div class="district"><a href="#">Район</a></div>
                <div class="catalog"><a href="#">Каталог квартир</a></div>
                <div class="ipoteka"><a href="#">Регистрация</a></div>
                <div class="contacts"><a href="#">Вход</a></div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-top">Жилой комплекс<br> в историческом центре</div>
            <div class="bottom-center-vector"><img src="img/Vector.png"></div>
            <div class="bottom-bottom">
                <div class="sticker"><img src="img/sticker.png"></div>
                <div class="fontan">Наб. реки Фонтанки 10-15</div>
                <div class="phone"><img src="img/phone.png"></div>
                <div class="num">8 (812) 123-45-67</div>
            </div>
        </div>
    </div>
    <div class="content-map">
        <div class="map">Район на карте</div>
        <div class="map-bottom">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21407.318285786212!2d37.786594794605456!3d55.66869344885885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1671045621030!5m2!1sru!2sru"
                width="1115" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="content-question">
            <div class="question">Есть вопросы?</div>
        </div>
        <div class="second-line">
            <div class="second-line-one">
                <div class="text3">*Мы никому не передаем ваши данные.
                    И не сохраняем ваш номер в базу.</div></div>
            <div class="second-line-two">
                <div class="text">Ваше имя</div>
            </div>
            <div class="second-line-tree"><div class="text">Ваш телефон</div> </div>
            <div class="second-line-four"><div class="text2">Посмотреть район</div> </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-left">
            <div class="house">MyHouse</div>
            <div class="residential">ЖИЛОЙ КОМПЛЕКС</div>
        </div>
        <div class="footer-center">
            <a href="#">О комплексе</a><br><br>
            <a href="#">Район</a><br><br>
            <a href="#">Каталог квартир</a><br><br>
            <a href="#">Ипотека</a><br><br>
            <a href="#">Контакты</a>
        </div>
        <div class="footer-right">
            <a href="#">Адрес: Наб. реки Фонтанки 10-15</a><br><br>
            <a href="#">Телефон: 8 (812) 123-45-67</a><br><br>
            <a href="#">Отдел продаж: 10:00 - 20:00</a><br><br>
            <a href="#">E-mail: vip@housevip.ru</a><br><br>

        </div>
    </div>

@endsection

@section('footer')
    //подключение footer из файла resources/views/landing_footer.blade.php, который необходимо создать
{{--    @include('landing_footer')--}}
@endsection
