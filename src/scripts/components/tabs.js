export class Tabs {
    tabsWrapperElement = null;
    tabsElementsSelector = '';

    constructor(options) {
        const { tabsWrapperElement, tabsElementsSelector } = options;
        this.tabsElementsSelector = tabsElementsSelector;
        this.tabsWrapperElement = tabsWrapperElement;
    }

    init() {

    }

    destroy() {

    }
}
