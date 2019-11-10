<template>
  <div class="main-body">
    <aside class="main-sidebar">
      <ul class="file-list">
        <li
          :class="{'is-active': name === fileName}"
          v-bind:key="name" v-for="(value, name) in gist.files"
          @click="navigateToFile(name)"
        >{{name}}</li>
      </ul>
      <router-link to="/create">
        <button class="main-sidebar__add">Add new</button>
      </router-link>
    </aside>
    <main class="main-content">
      <div class="file-item">
        <div class="file-item__body">
          <div class="file-item__header">
            <h2 class="file-item__name">{{fileName}}</h2>
            <div class="file-item__buttons">
              <button class="btn btn--negative" @click="deleteFile()">Delete</button>
              <button class="btn btn--positive" @click="editFile()">Edit</button>
            </div>
          </div>
          <div class="file-item__content">
            <pre v-text="content"></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'selected',
  data () {
    return {
      fileName: '',
      content: ''
    }
  },
  computed: {
    ...mapState(['gist'])
  },
  created () {
    this.getPageData()
  },
  methods: {
    ...mapActions(['getFileContent', 'deleteFileFromGist']),
    navigateToFile (filename) {
      this.$router.push(`/files/${filename}`)
      this.getPageData()
    },
    getPageData () {
      this.fileName = this.$route.params.filename
      this.content = this.gist.files[this.fileName].content
    },
    async deleteFile () {
      await this.deleteFileFromGist(this.fileName)
      this.$router.push('/')
    },
    editFile () {
      this.$router.push(`/files/${this.fileName}/edit`)
    }
  }
}
</script>
