import Vue from "vue";
import store from "./LightboxStore"

Vue.directive('lightbox', {
    bind(el, binding) {
        
        console.log('binding');
        store.addImage(el.getAttribute('href'))
        
        el.addEventListener('click', (e) => {
            e.preventDefault();
            store.open(el.getAttribute('href'))
        })
    },
    unbind(el) {
        console.log('unbinding');
        store.remove(el.getAttribute('href'))
    }
})