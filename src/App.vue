<template>
    <div id="app">
      <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/NavBar.component.vue'
export default {

  components: {
    navBar
  }
}
</script>

<style>

</style>
