<template>
   <div class="main-body">
    <div class="file-edit">
      <h2 class="file-edit__name">Please add github access token</h2>
      <p>If you don't have, you can generate here: <a href="https://github.com/settings/tokens">https://github.com/settings/tokens</a></p>
      <h2 class="file-edit__name">
        <input class="access-token-input" type="text" placeholder="access token" v-model.trim="$v.accessToken.$model" autofocus />
      </h2>
      <div class="file-edit__buttons">
        <button class="btn" :class="{'btn--positive': !$v.$invalid}" @click="saveAccessToken()" :disabled="$v.$invalid">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import AccessTokenService from '../services/access-token.service'

export default {
  name: 'add-access-token',
  data () {
    return {
      accessToken: ''
    }
  },
  methods: {
    saveAccessToken () {
      if (!this.$v.$invalid) {
        AccessTokenService.saveAccessToken(this.accessToken)
        this.$router.push('/')
      }
    }
  },
  validations: {
    accessToken: { required }
  }
}
</script>

<style lang="scss" scoped>
.access-token-input {
  width: 350px;
  padding: 3px
}
</style>
