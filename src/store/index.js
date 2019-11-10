import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api/gist-api'

Vue.use(Vuex)

const GIST = 'gist'
const OWNER = 'owner'

const GIST_DESCRIPTION = 'Created by Github Notes'

const TEMPLATE_NEW_GIST = {
  description: GIST_DESCRIPTION,
  public: true,
  files: {
    'welcome.txt': {
      content: 'Welcome!'
    }
  }
}

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
    [GIST] (state, data) {
      state.gist = { ...data }
    },
    [OWNER] (state, owner) {
      state.owner = { ...owner }
    }
  },
  actions: {
    async getGists ({ dispatch }) {
      const response = await api.getGists()
      const gist = response.data.find(gist => gist.description === GIST_DESCRIPTION)
      if (gist) {
        const { owner } = gist
        dispatch('storeGistData', { owner, gist })
      } else {
        dispatch('createGist')
      }
    },

    async createGist ({ dispatch }) {
      const response = await api.createGist(TEMPLATE_NEW_GIST)
      const gist = response.data
      const { owner } = gist
      dispatch('storeGistData', { owner, gist })
    },

    storeGistData ({ commit }, { owner, gist }) {
      commit(GIST, gist)
      commit(OWNER, owner)
    }

  },
  modules: {
  }
})
