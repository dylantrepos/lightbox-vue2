<template>
  <div id="app">
    <a href="http://www.picsum.photos/id/1003/800/600" v-lightbox>
      <img src="http://www.picsum.photos/id/1003/150/150" alt="">
    </a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
