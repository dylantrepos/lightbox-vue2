<template>
  <div id="app">
    <a :href="'http://www.picsum.photos/id/105' + n + '/800/600'" v-lightbox v-for="n in 9" :key="n"> 
      <img :src="'http://www.picsum.photos/id/105' + n + '/150/150'" alt="">
    </a>
    <LightboxComponent></LightboxComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import LightboxComponent from './components/lightbox/LightboxComponent.vue'

export default {
  name: 'App',
  components: {
    LightboxComponent
  }
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
