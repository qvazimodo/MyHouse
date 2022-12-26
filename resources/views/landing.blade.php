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
                <img class="img-review" src="{{asset('storage/images/woman.jpeg')}}" alt="photo">
                <div class="block-review-text">
                <p class="review-author">Елена, жилец многоквартирного дома №7</p>
                <p class="review-txt">
                    Лучшая управляющая компания, которая по-настоящему заботится о своих жильцах. Сейчас в дни снегопада, дворники вручную лопатами расчищают снег на парковке. Всегда порядок, охрана следит и пресекает нарушения. Чувствуешь себя в безопасности. Сотрудники Очень быстро реагируют на любое обращение! Просто восторг и благодарность!
                </p>
                </div>
            </div>

            <div class="review-block">
                <img class="img-review2" src="{{asset('storage/images/woman2.jpg')}}" alt="photo">
                <div class="block-review-text">
                    <p class="review-author">Ирина, жилец многоквартирного дома №7</p>
                    <p class="review-txt">
                        Заказывала сантехника, оформила заявку на сайте, потек кран, всё сделал пришёл, аккуратный, вежливый, дополнительно оплату не взял, приятно отношение со стороны управляющей компании.
                    </p>
                </div>
            </div>

            <div class="review-block">
                <img class="img-review3" src="{{asset('storage/images/man.jpeg')}}" alt="photo">
                <div class="block-review-text">
                    <p class="review-author">Игорь, жилец многоквартирного дома №53</p>
                    <p class="review-txt">
                        Благодарю за качественную работу. Очень доволен таким отношением к своим обязанностям работниками УК.
                    </p>
                </div>
            </div>

        </div>
    </div>

    <div class="content-map">
        <div class="map">Наши дома на карте</div>
        <div class="map-bottom">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21407.318285786212!2d37.786594794605456!3d55.66869344885885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1671045621030!5m2!1sru!2sru"
                max-width="1300" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div id="questions"></div>


    </div>

@endsection

@section('footer')
    @include('footer')
@endsection
