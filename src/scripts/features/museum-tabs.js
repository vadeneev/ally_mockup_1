import { Tabs } from '../components/tabs';

let tabs = null;

function init() {
    tabs = new Tabs({
        tabsBtnElements: [...document.querySelectorAll('#museum .js-tabs-events .btn')],
        tabsWrapperElement: document.querySelector('#museum .js-tabs-events'),
        tabsContentElements: [...document.querySelectorAll('#museum .js-tab-content')]
    });

    tabs.init();
}

export {
    init,
}
