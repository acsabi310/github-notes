import axiosInstance from './axios-instance'

const BASE_URL = 'https://api.github.com/gists'

export default {

  getGists () {
    return axiosInstance.get(BASE_URL)
  },

  createGist (data) {
    return axiosInstance.post(BASE_URL, data)
  }
}
