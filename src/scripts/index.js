import * as loginModal from './features/login-modal-feature'
import * as subscribeFeature from './features/subscribe-feature'

document.addEventListener('DOMContentLoaded', init)

function init() {
    loginModal.init();
    subscribeFeature.init();
}
