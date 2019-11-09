import axios from 'axios'
import router from '../router'

const accessToken = 'teszt'

axios.interceptors.request.use(
  request => requestHandler(request)
)

axios.interceptors.response.use(
  response => responseHandler(response),
  error => errorResponseHandler(error)
)

function requestHandler (request) {
  if (accessToken) {
    request.headers['Authorization'] = `token ${accessToken}`
    return request
  } else {
    router.push('add-access-token')
  }
}

function responseHandler (response) {
  Promise.resolve(response)
}

function errorResponseHandler (error) {
  if (error.response.status === 401) {
    router.push('add-access-token')
  }
  Promise.reject(error)
}

export default axios
