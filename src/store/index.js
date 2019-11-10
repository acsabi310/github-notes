import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api/gist-api'

Vue.use(Vuex)

const GIST = 'gist'
const GIST_ID = 'gistId'
const OWNER = 'owner'
const ERROR = 'error'

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
    gistId: '',
    gist: {
      description: '',
      files: {}
    },
    owner: {
      avatar_url: '',
      login: ''
    },
    error: false
  },
  mutations: {
    [GIST] (state, data) {
      state.gist = { ...data }
    },
    [OWNER] (state, owner) {
      state.owner = { ...owner }
    },
    [ERROR] (state, value) {
      state.error = value
    },
    [GIST_ID] (state, value) {
      state.gistId = value
    }
  },
  actions: {
    init ({ dispatch, state }) {
      if (state.gistId) {
        dispatch('getGist', state.gistId)
      } else {
        dispatch('getGists')
      }
    },

    async getGists ({ commit, dispatch }) {
      const response = await api.getGists()
      if (!response) return
      const gist = response.data.find(gist => gist.description === GIST_DESCRIPTION)
      if (gist) {
        commit(GIST_ID, gist.id)
        dispatch('getGist', gist.id)
      } else {
        dispatch('createGist')
      }
    },

    async getGist ({ dispatch }, id) {
      const response = await api.getGist(id)
      const gist = response.data
      const { owner } = gist
      dispatch('storeGistData', { owner, gist })
    },

    async createGist ({ commit, dispatch }) {
      const response = await api.createGist(TEMPLATE_NEW_GIST)
      const gist = response.data
      const { owner } = gist
      commit(GIST_ID, gist.id)
      dispatch('storeGistData', { owner, gist })
    },

    storeGistData ({ commit }, { owner, gist }) {
      commit(GIST, gist)
      commit(OWNER, owner)
    },

    saveFileToGist ({ state }, fileData) {
      return new Promise((resolve, reject) => {
        const { id } = state.gist
        const requestData = {
          files: { ...fileData }
        }
        api.patchGist(id, requestData).then(() => { resolve() }).catch(error => { reject(error) })
      })
    },

    setError ({ commit }, value) {
      commit(ERROR, value)
    },

    deleteFileFromGist ({ state }, fileName) {
      return new Promise((resolve, reject) => {
        const { id } = state.gist
        const requestData = {
          files: { [fileName]: null }
        }
        api.patchGist(id, requestData).then(() => { resolve() }).catch(error => { reject(error) })
      })
    }

  },
  modules: {
  }
})
