import {Carousel} from "../components/carousel";

let carousel = null;

function init() {
    carousel = new Carousel({
        scrollLeftBtn: document.querySelector('.js-carousel .js-btn-left'),
        scrollRightBtn: document.querySelector('.js-carousel .js-btn-right'),
        carouselItems: [...document.querySelectorAll('.js-carousel .js-slide')],
    });
    carousel.init();
}

export {
    init,
}
