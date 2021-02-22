export class Tabs {
    tabsBtnElements = [];
    tabsContentElements = [];
    tabsWrapperElement = null;

    constructor(options) {
        const { tabsBtnElements, tabsContentElements, tabsWrapperElement } = options;
        this.tabsBtnElements = tabsBtnElements;
        this.tabsWrapperElement = tabsWrapperElement;
        this.tabsContentElements = tabsContentElements;
    }

    init = () => {
        this.tabsWrapperElement.addEventListener('click', this.handleTabBtnClick);
    }

    destroy() {
        this.tabsWrapperElement.removeEventListener('click', this.handleTabBtnClick);
    }

    handleTabBtnClick = ({ target }) => {
        if (!this.tabsBtnElements.some(element => element === target)) {
            return;
        }

        this.tabsBtnElements.forEach((element) => {
            element.setAttribute('aria-selected', target === element);
            element.classList.toggle('btn--clean', target !== element);
            element.classList.toggle('btn__link', target !== element);
            element.classList.toggle('btn--passive', target === element);
        });

        const tabContentId = target.getAttribute('aria-controls');

        this.tabsContentElements.forEach((element) => {
            const isCurrent = tabContentId === element.id;

            element.setAttribute('aria-hidden', !isCurrent);
            element.classList.toggle('hidden', !isCurrent);
        });
    }
}
