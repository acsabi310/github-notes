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
  store.dispatch('setIsLoading', true)
  let accessToken = AccessTokenService.getAccessToken()
  if (accessToken) {
    request.headers['Authorization'] = `token ${accessToken}`
    return request
  } else {
    router.push('/add-access-token')
  }
}

function responseHandler (response) {
  setTimeout(() => {
    store.dispatch('setIsLoading', false)
  }, 500)
  return Promise.resolve(response)
}

function errorResponseHandler (error) {
  setTimeout(() => {
    store.dispatch('setIsLoading', false)
  }, 500)
  store.dispatch('setError', true)
  if (error.response && error.response.status === 401) {
    router.push('/add-access-token')
    return Promise.reject(error.response)
  } else if (error.request) {
    return Promise.reject(error.request)
  } else {
    return Promise.reject(error.message)
  }
}

export default window.axios
