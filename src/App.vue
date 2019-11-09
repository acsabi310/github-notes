<template>
  <div id="app" class="github-notes">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <HeaderComponent></HeaderComponent>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../src/styles/main.scss";

#app {
  height: inherit;
}
</style>

<script>
import HeaderComponent from './components/Header.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>
