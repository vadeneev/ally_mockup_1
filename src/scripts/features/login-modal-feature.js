import {Modal} from '../components/modal';

let userMenuBtn = null;
let modal = null;

function handleKeyPress({keyCode}) {
    if (keyCode === 'Enter') {
        modal.show();
    }
}

function init() {
    initComponents();
    initListeners();
}

function initComponents() {
    userMenuBtn = document.querySelector('.js-user-menu');
    modal = new Modal({
        modalWrapperElement: document.querySelector('.js-modal-wrapper'),
        lastFocusElement: document.querySelector('.js-modal-last-focus'),
        firstFocusElement: document.querySelector('.js-modal-first-focus'),
        okButton: document.querySelector('.js-modal-submit'),
        closeButton: document.querySelector('.js-modal-close'),
        restTopLevelElements: document.querySelectorAll('body > *:not(.js-modal-wrapper)'),
        triggerElement: userMenuBtn,
        whenHandleOk: () => {
        }
    });
}

function initListeners() {
    userMenuBtn.addEventListener('click', modal.show);
    userMenuBtn.addEventListener('keypress', handleKeyPress);
}

function destroy() {
    userMenuBtn.removeEventListener('click', modal.show);
    userMenuBtn.removeEventListener('keypress', handleKeyPress);
}

export {
    init,
    modal,
    destroy,
    userMenuBtn
}

