import Vue from "vue";
import store from "./LightboxStore"

Vue.directive('lightbox', {
    bind(el, binding) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            store.state.image = el.getAttribute('href')
        })
    }
})