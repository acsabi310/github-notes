import axios from 'axios'
import router from '../router'
import store from '../store'
import AccessTokenService from '../services/access-token.service'

if (!window.axios) {
  window.axios = axios
}

window.axios.interceptors.request.use(
  request => requestHandler(request)
)

window.axios.interceptors.response.use(
  response => responseHandler(response),
  error => errorResponseHandler(error)
)

function requestHandler (request) {
  let accessToken = AccessTokenService.getAccessToken()
  if (accessToken) {
    request.headers['Authorization'] = `token ${accessToken}`
    return request
  } else {
    router.push('add-access-token')
  }
}

function responseHandler (response) {
  return Promise.resolve(response)
}

function errorResponseHandler (error) {
  if (error.response.status === 401) {
    router.push('add-access-token')
  }
  store.dispatch('setError', true)
  return Promise.reject(error)
}

export default window.axios
