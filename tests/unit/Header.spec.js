// import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '../../src/components/Header.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import { mockOwner } from '../mockStore'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  it('header rendered properly', () => {
    const wrapper = shallowMount(HeaderComponent, {
      mocks: {
        $store: {
          state: {
            owner: { ...mockOwner }
          }
        },
        $route: {}
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      localVue
    })
    expect(wrapper.text().includes('animercsaba')).toBe(true)
  })
})
