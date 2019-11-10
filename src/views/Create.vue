<template>
  <div class="main-body">
    <div class="file-edit">
      <h2 class="file-edit__name">
        <input type="text" placeholder="filename.ext" v-model.trim="$v.filename.$model" autofocus/>
      </h2>
      <textarea class="file-edit__content" v-model="$v.content.$model"></textarea>
      <div class="file-edit__buttons">
        <button class="btn" :class="{'btn--positive': !$v.$invalid}" :disabled="$v.$invalid" @click="saveFile()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'create',
  data () {
    return {
      filename: '',
      content: ''
    }
  },
  validations: {
    filename: { required, maxLength: maxLength(255) },
    content: { required }
  },
  methods: {
    ...mapActions(['saveFileToGist']),
    async saveFile () {
      if (!this.$v.$invalid) {
        await this.saveFileToGist({
          [this.filename]: {
            content: this.content
          }
        })
        this.$router.push('/')
      }
    }
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
