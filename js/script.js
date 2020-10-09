    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import forms from './modules/forms';
    import calc from './modules/calc';
    import timer from './modules/timer';
    import modal from './modules/modal';
    import cards from './modules/cards';
    import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 20000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerId);
    calc();
    timer('.timer', '2020-10-23');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
});


