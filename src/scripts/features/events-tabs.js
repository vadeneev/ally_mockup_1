import { Tabs } from '../components/tabs';

let tabs = null;

function init() {
    tabs = new Tabs({
        tabsBtnElements: [...document.querySelectorAll('.js-tabs-events .btn')],
        tabsWrapperElement: document.querySelector('.js-tabs-events'),
        tabsContentElements: [...document.querySelectorAll('#exhibitions .js-tab-content')]
    });

    tabs.init();
}

export {
    init,
}
