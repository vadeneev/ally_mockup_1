import {Form} from '../components/form'
import * as services from '../services/services';
import * as Yup from 'yup';
import {Modal} from "../components/modal";
import {modal, userMenuBtn} from "./login-modal-feature";

let schema = Yup.object().shape({
    email: Yup.string()
        .email('Ошибка! Не верный формат адреса электронной почты')
        .required('Ошибка! Поле логин обязательно'),
});
let form = null;

function initComponents() {
    form = new Form({
        schema,
        form: document.querySelector('.js-form-subscribe'),
        inputElements: document.querySelectorAll('.js-form-subscribe input'),
        btnElements: document.querySelectorAll('.js-form-subscribe button'),
        errorMessageElements: document.querySelectorAll('.js-form-subscribe .error'),
        sendService: services.subscribe
    });
}

function initListeners() {
    form.init();
}

function init() {
    initComponents();
    initListeners();
}

export {
    init
}
