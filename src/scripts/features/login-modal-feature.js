import {Modal} from '../components/modal/index';
import {Form} from '../components/form'
import * as services from '../services/services';
import * as Yup from 'yup';

let schema = Yup.object().shape({
    login: Yup.string()
        .min(3, 'Ошибка! Минимальная длина поля Логин 3')
        .max(30, 'Ошибка! Максимальная длина поля Логин 30')
        .required('Ошибка! Поле логин обязательно'),
    pass: Yup.string()
        .min(6, 'Ошибка! Минимальная длина поля пароль 6')
        .max(30, 'Ошибка! Максимальная длина поля пароль 30')
        .required('Ошибка! Поле пароль обязательно'),
});

let userMenuBtn = null;
let modal = null;
let form = null;

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
    form = new Form({
        schema,
        form: document.querySelector('.js-login-form'),
        inputElements: document.querySelectorAll('.js-login-form input'),
        btnElements: document.querySelectorAll('.js-login-form button'),
        errorMessageElements: document.querySelectorAll('.js-login-form .error'),
        alarmContainer: document.querySelector('.js-login-alarm'),
        sendService: services.authenticate
    });
    modal = new Modal({
        modalWrapperElement: document.querySelector('.js-modal-wrapper'),
        lastFocusElement: document.querySelector('.js-modal-last-focus'),
        firstFocusElement: document.querySelector('.js-modal-first-focus'),
        okButton: document.querySelector('.js-modal-submit'),
        closeButton: document.querySelector('.js-modal-close'),
        restTopLevelElements: document.querySelectorAll('body > *:not(.js-modal-wrapper)'),
        triggerElement: userMenuBtn,
        whenHandleOk: form.send,
        onClose: form.wipe
    });
}

function initListeners() {
    form.init();
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

