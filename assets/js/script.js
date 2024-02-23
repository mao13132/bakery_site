'use strict';

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function() {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded')
})

/* Функция добавления события списку элеметоов */
const addEventOnElemnts = function(elements, evetType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(evetType, callback);
    }
}

/* Добавляю эллементы что бы по клику добавляли - удалились классы */

const navbar = document.querySelector("[data-navbar]");

const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const overlay = document.querySelector("[data-overlay]");


const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElemnts(navTogglers, 'click', toggleNavbar);


/* Header */

const header = document.querySelector("[data-header]");

/* При скроле в низ убираем хедер */

let lastScrollPos = 0;

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY;

    if (isScrollBottom) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScrollPos = window.scrollY;
};

window.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        header.classList.add('active');
        hideHeader();
    } else {
        header.classList.remove("active")
    }
})

/* При скроле в низ убираем хедер */
