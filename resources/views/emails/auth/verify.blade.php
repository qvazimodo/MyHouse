<!-- resources/views/emails/verify.blade.php -->

@component('mail::message')

    <p>Нажмите на кнопку ниже, чтобы подтвердить почту.</p>

    @component('mail::button', ['url' => $url])
        Подтвердить почту
    @endcomponent

    <p>Если кнопа не работает, перейдите по ссылке {{ $url }}</p>

@endcomponent
