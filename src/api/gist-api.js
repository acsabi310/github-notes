import axiosInstance from './axios-instance'

const BASE_URL = 'https://api.github.com/gists'

export default {

  getGists () {
    return axiosInstance.get(BASE_URL)
  }
}
