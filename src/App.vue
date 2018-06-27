<template>
  <div id="app" class="container">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
body {
    background: url('./assets/film.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
