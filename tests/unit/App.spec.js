import App from '../../src/App.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import mockStore from '../mockStore'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(mockStore)

describe('App.vue', () => {
  it('app renders', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-link', 'router-view'],
      store
    })
    expect(wrapper.text()).toBe('')
  })
})
