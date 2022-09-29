import axios from 'axios'
import qs from 'qs'
import router from '../router'

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  // console.log('错误的传参')
  return Promise.reject(error)
})

// 返回状态判断
window.tipLock = false
axios.interceptors.response.use(async (res) => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  const code = res.data.code
  if (code !== 1) {
    // API狀態判斷
  }
  return res
}, (error) => {
  if (!window.tipLock) {
    window.tipLock = true
  }
  return Promise.reject(error)
})

export const rest = {
  create (url, params, callbackFunc) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(response => {
          resolve(response.data)
        }, error => {
          if (error.message === '取消请求') return
          reject(error.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  post: (url, params, callbackFunc) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params))
        .then(response => {
          resolve(response.data)
        }, error => {
          if (error.message === '取消请求') return
          reject(error.data)
        })
        .catch((error) => {
          reject(error.data)
        })
    })
  },
  get: (url, params, callbackFunc) => {
    return new Promise((resolve, reject) => {
      const param = params || {}
      const paramData = {}
      for (const item in param) {
        if (param[item] === null || param[item] === undefined) {
          continue
        }
        paramData[item] = encodeURIComponent(param[item])
      }
      const uri = getStrUrl(url, paramData)
      // console.log(uri)
      axios.get(uri)
        .then(function (res) {
          resolve(res.data)
          // if (res.data.code === 1) {
          //   resolve(res.data)
          // } else {
          //   if (typeof callbackFunc === 'function') {
          //     callbackFunc(res.data)
          //   }
          // }
        })
        .catch(function (error) {
          if (typeof callbackFunc === 'function') {
            callbackFunc(error)
          }
          reject(error)
        })
    })
  }
}
export function getStrUrl (url, params) {
  if (params) {
    let uri = '?'
    for (const item in params) {
      uri = uri + item + '=' + params[item] + '&'
    }
    return url + uri
  }
  return url
}
