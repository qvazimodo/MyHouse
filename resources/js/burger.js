// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    let i;
// open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
