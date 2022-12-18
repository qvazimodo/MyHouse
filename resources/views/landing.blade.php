@extends('layouts.landing_layout')

@section('title', 'My House Управляющая компания')

@section('header')
    @include('header')
@endsection

@section('flats')
    @include('flats')
@endsection

@section('content')

    <div class="watching-section">
        <div class="container">
            <h2 class="title-2">Хотите присоединить свой дом к нашей УК?</h2>
            <div class="watching-section_wrp">
                <p class="watching-section_text">Наша компания предлагает программу предоставления полного спектра услуг по профессиональному управлению и техническому обслуживанию жилищного фонда. </p>
                        <div class="watching-section_form">
                    <input type="text" value="Ваше имя" class="section-input">
                    <input type="text" value="Ваш телефон" class="section-input">
                    <p>*Мы никому не передаем ваши данные.
                        И не сохраняем ваш номер в базу.</p>
                    <button class="section-btn">Отправить заявку</button>
                </div>
            </div>
        </div>
    </div>

    <div class="video-section">
        <div class="video-block"></div>
    </div>

    <div class="reviews">
        <div class="container">
            <h2 class="title-2">Отзывы наших клиентов</h2>
            <div class="review-block">
                <p class="review-txt">
                    Лучшая управляющая компания, которая по-настоящему заботится о своих жильцах. Сейчас в дни снегопада, дворники вручную лопатами расчищают снег на парковке. Всегда порядок, охрана следит и пресекает нарушения. Чувствуешь себя в безопасности. Сотрудники Очень быстро реагируют на любое обращение! Просто восторг и благодарность!
                </p>
                <p class="review-author">Жильцы многоквартирного дома №67</p>
            </div>
            <div class="review-block">
                <p class="review-txt">
                    Заказывала сантехника, оформила заявку на сайте, потек кран, всё сделал пришёл, аккуратный, вежливый, дополнительно оплату не взял, приятно отношение со стороны управляющей компании.
                </p>
                <p class="review-author">Ирина, жилец многоквартирного дома №7</p>
            </div>
            <div class="review-block">
                <p class="review-txt">
                    Благодарим за качественную работу. Очень довольны таким отношением к своим обязанностям работниками УК.
                </p>
                <p class="review-author">Жильцы многоквартирного дома №53</p>
            </div>
        </div>
    </div>

    <div class="content-map">
        <div class="map">Наши дома на карте</div>
        <div class="map-bottom">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21407.318285786212!2d37.786594794605456!3d55.66869344885885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1671045621030!5m2!1sru!2sru"
                max-width="1115" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
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
            <div class="second-line-four"><div class="text2">Заказать звонок</div> </div>
        </div>
    </div>
@endsection

@section('footer')
    @include('footer')
@endsection
