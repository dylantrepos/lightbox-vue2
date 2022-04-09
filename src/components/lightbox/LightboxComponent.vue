<template>
    <div class="lightbox" v-if="image" @click="close">
        <transition :name="transition">
            <LightboxImage :image="image" :key="image"></LightboxImage>
        </transition>
        <div class="lightbox__close" @click="close"></div>
        <div class="lightbox__btn lightbox__next" @click.stop="next"></div>
        <div class="lightbox__btn lightbox__prev" @click.stop="prev"></div>
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
            direction: 'next'
        }
    },
    computed: {
        image() {
            return this.state.images[this.state.index]
        },
        transition() {
            return 'lightbox-' + this.direction
        }

    },
    methods: {
        close() {
            store.close()
        },
        next() {
            this.direction = 'next'
            store.next()
        },
        prev() {
            this.direction = 'prev'
            store.prev()
        }
    }
}
</script>

<style lang="css" src="./lightbox.css">

</style>