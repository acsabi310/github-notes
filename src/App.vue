<template>
  <div id="app" class="github-notes">
    <Loading :active.sync="isLoading" loader="dots"></Loading>
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
import Loading from 'vue-loading-overlay'
import { mapState } from 'vuex'

export default {
  components: {
    HeaderComponent,
    ErrorBadge,
    Loading
  },
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>
