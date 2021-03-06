import { Tabs } from '../components/tabs';

let tabs = null;

function init() {
    tabs = new Tabs({
        tabsBtnElements: [...document.querySelectorAll('#exhibitions .js-tabs-events .btn')],
        tabsWrapperElement: document.querySelector('#exhibitions .js-tabs-events'),
        tabsContentElements: [...document.querySelectorAll('#exhibitions .js-tab-content')]
    });

    tabs.init();
}

export {
    init,
}
