export const mockState = {}
export const initState = {
  gistId: '',
  gist: {
    description: '',
    files: {
      file: {
        content: 'content'
      }
    }
  },
  owner: {
    avatar_url: '',
    login: ''
  },
  error: false
}

export const mockOwner = {
  'login': 'animercsaba',
  'id': 11329062,
  'node_id': 'MDQ6VXNlcjExMzI5MDYy',
  'avatar_url': 'https://avatars0.githubusercontent.com/u/11329062?v=4',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/animercsaba',
  'html_url': 'https://github.com/animercsaba',
  'followers_url': 'https://api.github.com/users/animercsaba/followers',
  'following_url': 'https://api.github.com/users/animercsaba/following{/other_user}',
  'gists_url': 'https://api.github.com/users/animercsaba/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/animercsaba/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/animercsaba/subscriptions',
  'organizations_url': 'https://api.github.com/users/animercsaba/orgs',
  'repos_url': 'https://api.github.com/users/animercsaba/repos',
  'events_url': 'https://api.github.com/users/animercsaba/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/animercsaba/received_events',
  'type': 'User',
  'site_admin': false
}

export default {
  state: {
    ...initState
  },
  actions: {
    init () {
    },

    async getGists () {

    },
    async getGist (id) {

    },

    async createGist () {

    },

    storeGistData () {

    },

    saveFileToGist (fileData) {
    },

    setError (value) {

    },

    deleteFileFromGist (fileName) {

    }

  }
}
