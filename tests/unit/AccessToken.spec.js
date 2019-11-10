import AccessToken from '../../src/views/AccessToken.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuelidate)
localVue.use(VueRouter)
const router = new VueRouter()

describe('AccessToken.vue', () => {
  it('app renders', () => {
    const wrapper = shallowMount(AccessToken, {
      localVue
    })
    expect(wrapper.text().includes('Please add github access token')).toBeTruthy()
  })

  it('should not save token', () => {
    const wrapper = shallowMount(AccessToken, {
      localVue
    })
    wrapper.vm.saveAccessToken()
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  it('should save token', () => {
    const wrapper = shallowMount(AccessToken, {
      localVue,
      router
    })
    wrapper.vm.accessToken = '[654asd]'
    wrapper.vm.saveAccessToken()
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
  })
})
