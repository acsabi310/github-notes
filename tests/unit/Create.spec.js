import Create from '../../src/views/Create.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import mockStore from '../mockStore'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuelidate)
localVue.use(VueRouter)
const router = new VueRouter()
const store = new Vuex.Store(mockStore)

describe('Create.vue', () => {
  it('app renders', () => {
    const wrapper = shallowMount(Create, {
      localVue
    })
    expect(wrapper.text()).toBe('Save')
  })

  it('should not save file', () => {
    const wrapper = shallowMount(Create, {
      localVue
    })
    wrapper.vm.saveFile()
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  it('should save file', async () => {
    const wrapper = shallowMount(Create, {
      localVue,
      router,
      store
    })
    wrapper.vm.fileName = '[654asd]'
    wrapper.vm.content = '[654asd]'
    await wrapper.vm.saveFile()
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
  })
})
