export default class AccessTokenService {
  static getAccessToken () {
    return window.localStorage.getItem('access-token')
  }

  static saveAccessToken (token) {
    window.localStorage.setItem('access-token', token)
  }
}
