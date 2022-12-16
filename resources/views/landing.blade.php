@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('content')

    <div class="watching-section">
        <div class="container">
            <h2 class="title-2">Хотите посмотреть?</h2>
            <div class="watching-section_wrp">
                <p class="watching-section_text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                    вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI
                    века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                            используя Lorem Ipsum для распечатки образцов. </p>
                        <div class="watching-section_form">
                    <input type="text" value="Ваше имя" class="section-input">
                    <input type="text" value="Ваш телефон" class="section-input">
                    <p>*Мы никому не передаем ваши данные.
                        И не сохраняем ваш номер в базу.</p>
                    <button class="section-btn">Посмотреть район</button>
                </div>
            </div>
        </div>
    </div>

    <div class="video-section">
        <div class="video-block"></div>
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
@endsection

@section('footer')
    @include('footer')
@endsection
