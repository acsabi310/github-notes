<template>
  <div class="main-body">
    <div class="file-edit">
      <h2 class="file-edit__name">{{fileName}}</h2>
      <textarea class="file-edit__content" v-model="$v.content.$model"></textarea>
      <div class="file-edit__buttons">
        <button class="btn" :class="{'btn--positive': !$v.$invalid}" :disabled="$v.$invalid" @click="saveFile()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      fileName: '',
      content: ''
    }
  },
  computed: {
    ...mapState(['gist', 'gistId'])
  },
  created () {
    if (!this.gistId) this.$router.push('/')
    this.getPageData()
  },
  methods: {
    ...mapActions(['saveFileToGist']),
    async saveFile () {
      if (!this.$v.$invalid) {
        await this.saveFileToGist({
          [this.fileName]: {
            content: this.content
          }
        })
        this.$router.push('/')
      }
    },
    getPageData () {
      this.fileName = this.$route.params.filename
      this.content = this.gist.files[this.fileName].content
    }
  },
  validations: {
    content: { required }
  }
}
</script>

<style lang="scss" scoped>
.file-edit {
  &__content {
    width: 500px;
    height: 250px;
  }
}
</style>
