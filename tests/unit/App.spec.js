import App from '../../src/App.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  it('app renders', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.text()).toBe('')
  })
})
