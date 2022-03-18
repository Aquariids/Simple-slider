import './scss/style.scss';
import slider from "../slider";


window.addEventListener('DOMContentLoaded',() => {
    slider({
        container: '.slider',
        wrapper: '.slider-wrapper',
        nextArrow:'.slider-next', // стрелочка следущая
        prevArrow:'.slider-prev', // стрелочка предыдущая
        field: '.slider-inner',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.slide' // каждый отдельный слайд
});
})