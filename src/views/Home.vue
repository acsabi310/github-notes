<template>
  <main class="main-body">
    <aside class="main-sidebar">
      <ul class="file-list">
        <li v-bind:key="name" v-for="(value, name) in gist.files" @click="navigateToFile(name)">{{name}}</li>
      </ul>
      <router-link to="create">
        <button class="main-sidebar__add">Add new</button>
      </router-link>
    </aside>
    <main class="main-content">
      <div class="main-content__empty">Nothing selected</div>
    </main>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['init']),
    navigateToFile (filename) {
      this.$router.push(`/files/${filename}`)
    }
  },
  computed: {
    ...mapState(['gist'])
  }
}
</script>
