export class Modal {
    modalWrapperElement = null;
    firstFocusElement = null;
    lastFocusElement = null;
    okButton = null;
    closeButton = null;
    whenHandleOk = null;
    triggerElement = null;
    restTopLevelElements = [];

    constructor(props) {
        const {
            modalWrapperElement,
            lastFocusElement,
            firstFocusElement,
            okButton,
            closeButton,
            whenHandleOk,
            restTopLevelElements,
            triggerElement,
        } = props;

        this.modalWrapperElement = modalWrapperElement;
        this.restTopLevelElements = restTopLevelElements
        this.firstFocusElement = firstFocusElement;
        this.lastFocusElement = lastFocusElement;
        this.okButton = okButton;
        this.closeButton = closeButton;
        this.whenHandleOk = whenHandleOk;
        this.triggerElement = triggerElement;
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    show = () => {
        this.restTopLevelElements.forEach((el) => el.setAttribute('aria-hidden', 'true'));
        this.modalWrapperElement.setAttribute('aria-hidden', 'false');
        this.modalWrapperElement.classList.remove('hidden');
        window.addEventListener('keydown', this.handleKeyPressed);
        this.closeButton.addEventListener('click', this.handleCloseClick);
        this.firstFocusElement.focus();
        document.body.classList.add('no-scroll');
    }

    close = () => {
        this.restTopLevelElements.forEach((el) => el.setAttribute('aria-hidden', 'false'));
        this.modalWrapperElement.setAttribute('aria-hidden', 'true');
        this.modalWrapperElement.classList.add('hidden');
        window.removeEventListener('keydown', this.handleKeyPressed);
        this.closeButton.removeEventListener('click', this.handleCloseClick);
        this.triggerElement.focus();
        document.body.classList.remove('no-scroll');
    }

    handleCloseClick = (event) => {
        event.preventDefault();
        this.close();
    }

    handleKeyPressed = (event) => {
        const {key, target} = event;

        if (key === 'Escape') {
            this.close()
        }

        if (key === 'Tab' && target === this.lastFocusElement) {
            this.firstFocusElement.focus();
        }
    }
}
