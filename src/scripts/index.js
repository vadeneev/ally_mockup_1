import * as loginModal from './features/login-modal-feature'
import * as subscribeFeature from './features/subscribe-feature'
import * as eventsTabs from './features/events-tabs'
import * as museumTabs from './features/museum-tabs'

document.addEventListener('DOMContentLoaded', init)

function init() {
    loginModal.init();
    subscribeFeature.init();
    eventsTabs.init();
    museumTabs.init();
}
