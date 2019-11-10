<template>
  <div id="app" class="github-notes">
    <ErrorBadge></ErrorBadge>
    <HeaderComponent></HeaderComponent>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "../src/styles/main.scss";
</style>

<script>
import HeaderComponent from './components/Header.vue'
import ErrorBadge from './components/ErrorBadge.vue'

export default {
  components: {
    HeaderComponent,
    ErrorBadge
  }
}
</script>
