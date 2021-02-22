export class Carousel {
    scrollLeftBtn = null;
    scrollRightBtn = null;
    carouselItems = [];
    currentItem = 0;

    constructor(options) {
        const { scrollLeftBtn, scrollRightBtn, carouselItems } = options;

        this.scrollLeftBtn = scrollLeftBtn;
        this.scrollRightBtn = scrollRightBtn;
        this.carouselItems = carouselItems;
    }

    init = () => {
        this.scrollLeftBtn.addEventListener('click', this.handleLeftClick);
        this.scrollRightBtn.addEventListener('click', this.handleLRightClick);
    }

    destroy() {
        this.scrollLeftBtn.removeEventListener('click', this.handleLeftClick);
        this.scrollRightBtn.removeEventListener('click', this.handleLRightClick);
    }

    handleLeftClick = () => {
        const nextSlideNum = this.currentItem - 1 < 0 ? this.carouselItems.length - 1 : this.currentItem - 1;

        this.scrollToSlide(nextSlideNum);
    }

    handleLRightClick = () => {
        const nextSlideNum = this.currentItem + 1 > this.carouselItems.length - 1 ? 0 : this.currentItem + 1;

        this.scrollToSlide(nextSlideNum);
    }

    scrollToSlide = (slideNumber) => {
        this.carouselItems.forEach((element, index) => {
            element.classList.toggle('hidden', slideNumber !== index);
            element.setAttribute('aria-hidden', slideNumber !== index);
        });
        this.currentItem = slideNumber;
    }
}
