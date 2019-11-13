import axiosInstance from './axios-instance'
const BASE_URL = 'https://api.github.com/gists'

export default {

  getGists () {
    return axiosInstance.get(`${BASE_URL}?_=${timeStamp()}`)
  },

  getGist (id) {
    return axiosInstance.get(`${BASE_URL}/${id}?_=${timeStamp()}`)
  },

  createGist (data) {
    return axiosInstance.post(`${BASE_URL}?_=${timeStamp()}`, data)
  },

  patchGist (gistId, requestData) {
    return axiosInstance.patch(`${BASE_URL}/${gistId}?_=${timeStamp()}`, requestData)
  }
}

function timeStamp () {
  return new Date().getTime()
}
