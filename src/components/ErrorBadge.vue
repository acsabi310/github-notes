<template>
  <header class="error-header" v-if="error">
    <h2 class="error-header__title">Something went wrong...</h2>
    <div class="error-header__close" @click="setError(false)"> X </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['error'])
  },
  methods: {
    ...mapActions(['setError'])
  }
}
</script>

<style lang="scss">
.error-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 30px;
  padding: 10px 15px;
  width: 100%;
  color: white;

  &__close {
    cursor: pointer;
  }
}
</style>
