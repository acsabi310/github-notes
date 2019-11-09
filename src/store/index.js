import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api/gist-api'

Vue.use(Vuex)

const GET_GISTS = 'gist'
const OWNER = 'owner'

export default new Vuex.Store({
  state: {
    gist: {
      description: '',
      files: {}
    },
    owner: {
      avatar_url: '',
      login: ''
    }
  },
  mutations: {
    [GET_GISTS] (state, data) {
      state.gist = { ...data }
    },
    [OWNER] (state, owner) {
      state.owner = { ...owner }
    }
  },
  actions: {
    async getGists ({ commit }) {
      const response = await api.getGists()
      // TODO filter description "Created by Github Notes" - WIP
      const { owner } = response.data[0]
      commit(GET_GISTS, response.data[0])
      commit(OWNER, owner)
    }

  },
  modules: {
  }
})
