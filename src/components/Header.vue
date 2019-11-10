<template>
  <header class="main-header">
    <router-link to="/">
      <h1 class="main-header__title">Github notes</h1>
    </router-link>
    <figure class="user-info">
      <picture class="user-info__avatar" v-if="owner.avatar_url">
        <img :src="owner.avatar_url" alt="Profile picture" />
      </picture>
      <figcaption class="user-info__name">{{owner.login}}</figcaption>
    </figure>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapState(['owner'])
  }
}
</script>

<style lang="scss" scoped>
.main-header a {
  text-decoration: none;
  color: white;
}
</style>
