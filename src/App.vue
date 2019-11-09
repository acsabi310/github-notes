<template>
  <div id="app" class="github-notes">
    <HeaderComponent></HeaderComponent>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "../src/styles/main.scss";
</style>

<script>
import HeaderComponent from './components/Header.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>
