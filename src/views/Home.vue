<template>
  <main class="main-body">
    <aside class="main-sidebar">
      <ul class="file-list">
        <li v-bind:key="name" v-for="(value, name) in gist.files">{{name}}</li>
      </ul>
      <button class="main-sidebar__add">Add new</button>
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
    this.getGists()
  },
  methods: {
    ...mapActions(['getGists'])
  },
  computed: {
    ...mapState(['gist'])
  }
}
</script>
