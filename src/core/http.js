import axios from 'axios'
import auth from './authorization'
import { gotoLoginPage } from './router'
import log from 'utils/log'

axios.interceptors.request.use(config => {
  config.headers.common.Authorization = auth.getToken()
  config.headers.common['X-ISAPI'] = 1
  if (config.headers.Authorization !== undefined) {
    config.headers.Authorization = auth.getToken()
  }
  return config
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  let errorMsg = '网络连接出错'
  let errorCode = 'Network Error'
  if (error.response && error.response.data) {
    errorMsg = error.response.data.error_msg
    errorCode = error.response.data.error_code

    if (errorCode === 'AUTHORIZATION_INVALID') {
      log.log('token失效，尝试更新token..')
      return auth.updateToken().then(() => {
        log.log('更新token成功，重新发起请求..')
        return axios(error.config)
      })
    } else if (errorCode === 'NO LOGIN') {
      return window.app.messagebox({
        title: '当前登录失效',
        message: '是否跳转到登录页？',
        showCancelButton: true
      }).then(result => {
        if (result !== 'cancel') {
          gotoLoginPage(true)
          const err = new Error('请重新登录')
          err.response = error.response
          throw err
        }
        const err = new Error(errorMsg)
        err.response = error.response
        throw err
      })
    }
  }
  const err = new Error(errorMsg)
  err.response = error.response
  throw err
})

const request = axios

request.withLoading = (...args) => {
  window.app.loading()
  return axios(...args).then(result => {
    window.app.loading(false)
    return result
  }, err => {
    window.app.loading(false)
    window.app.toast(err.message)
    throw err
  })
}

export default request
