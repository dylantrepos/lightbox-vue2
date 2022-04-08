<template>
    <div class="lightbox" v-if="image" @click="close">
        <LightboxImage :image="image"></LightboxImage>
        <div class="lightbox__close" @click="close">Close</div>
    </div>
</template>

<script>

import './LightboxDirective'
import store from './LightboxStore'
import LightboxImage from './LightboxImage.vue'

export default {
    components: {
        LightboxImage
    },
    data() {
        return {
            state: store.state,
        }
    },
    computed: {
        image() {
            if(this.state.index) return this.state.images[this.state.index]
        },

    },
    methods: {
        close() {
            store.close()
        }
    }
}
</script>

<style lang="css" src="./lightbox.css">

</style>