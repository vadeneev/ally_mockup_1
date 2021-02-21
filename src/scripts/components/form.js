export class Form {
    schema = null;
    form = null;
    inputElements = [];
    errorMessageElements = [];
    errors = {};
    alarmContainer = null;
    btnElements = null;
    sendService = null;

    constructor(props) {
        const {schema, inputElements, form, errorMessageElements, alarmContainer, sendService, btnElements} = props;

        this.form = form;
        this.alarmContainer = alarmContainer;
        this.schema = schema;
        this.inputElements = inputElements;
        this.sendService = sendService;
        this.errorMessageElements = errorMessageElements;
        this.btnElements = btnElements;
    }

    init = () => {
        this.form.addEventListener('submit', this.preventSubmit);
    }

    preventSubmit = event => event.preventDefault();

    validate = () => {
        const obj = {}
        this.inputElements.forEach((element) => {
            obj[element?.name] = element?.value;
        });

        return this.schema.validate(obj, {abortEarly: false})
            .then(() => {
                this.clearErrors();
            })
            .catch((result) => {
                this.errors = {}

                result.inner.forEach(error => {
                    this.errors[error.path] = error.message;
                })

                this.showErrors();

                return Promise.reject(this.errors);
            })
    }

    clearErrors = () => {
        this.errors = {}
        this.showErrors();
    }

    showErrors = () => {
        this.errorMessageElements.forEach((element) => {
            const id = element.getAttribute('for');
            const error = this.errors[window[id].name];
            element.innerText = error || '';
            element.setAttribute('aria-hidden', !Boolean(error));
            element.setAttribute('aria-hidden', !Boolean(error));
        })
    }


    send = () => {
        this.setBusy(true);

       return this.validate()
            .then(() => this.sendService())
            .finally(() => this.setBusy(false));
    }

    setBusy = (value) => {
        this.form.setAttribute('aria-busy', value);
        this.form.focus();
        this.inputElements.forEach((element) => {
            element.disabled = value;
        });
        this.btnElements.forEach((element) => {
            element.disabled = value;
        });
    }

    wipe = () => {
        this.form.removeEventListener('submit', this.preventSubmit);
        this.clearErrors();
        this.inputElements.forEach((element) => {
            element.value = '';
        });
    }
}
