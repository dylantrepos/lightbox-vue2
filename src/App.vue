<template>
  <div id="app">
    <div v-if="title == 'first'">
      <a :href="'http://www.picsum.photos/id/105' + n + '/800/600'" v-lightbox v-for="n in 9" :key="n"> 
        <img :src="'http://www.picsum.photos/id/105' + n + '/150/150'" alt="">
      </a>  
    </div>
    <section>
      <div v-if="title == 'second'">
        <a :href="'http://www.picsum.photos/id/106' + n + '/800/600'" v-lightbox v-for="n in 9" :key="n"> 
          <img :src="'http://www.picsum.photos/id/106' + n + '/150/150'" alt="">
        </a>  
      </div>
    </section>
    <button @click="title = 'first'">First Gallery</button>
    <button @click="title = 'second'">Second Gallery</button>
    <LightboxComponent></LightboxComponent>
  </div>
</template>

<script>

import LightboxComponent from './components/lightbox/LightboxComponent.vue'

export default {
  name: 'App',
  components: {
    LightboxComponent
  },

  data() {
    return {
      title: 'first'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
