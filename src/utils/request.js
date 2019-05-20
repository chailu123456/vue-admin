/**
 *
 * @authors linteng (875482941@qq.com)
 * @date    2018-11-19 21:30:36
 */

'use strict'

import axios from 'axios'
let axiosObj = {}


class Service {
  constructor (BASE_API) {
    this.init(BASE_API)
    this.OLDBASE_API = BASE_API
    return this.instance
  }

  init (BASE_API) {
    this.BASE_API = BASE_API || this.BASE_API
    this.instance = this.create(this.BASE_API)
    this.instance.onRequest = this.onRequest.bind(this)
    this.instance.onResponse = this.onResponse.bind(this)
    this.instance.configure = this.configure.bind(this)
    this.instance.defaults.retryDelay = 500
    this.instance.defaults.timeout = 500
  }

  configure (config) {
    this.OLDBASE_API = this.BASE_API
    if (Object.prototype.toString.call(config) === '[object Object]') {
      for (let i in config) {
        this[i] = config[i]
      }
    }
    this.init()
    return this.instance
  }

  onRequest ({yes, no}) {
    let that = this
    // 添加响应拦截器
    that.instance.interceptors.request.use(
      config => {
        yes(config)
        return config
      },
      error => {
        if (no) {
          no(that.handlerError(error))
        }
      }
    )
  }

  onResponse ({yes, no}) {
    let that = this
    console.log(yes)
// 添加响应拦截器
    that.instance.interceptors.response.use(
      response => {
        if (yes) {
          this.BASE_API = this.OLDBASE_API
          console.log('response')
          return yes(response)
        }
      },
      error => {
        if (no) {
          no(that.handlerError(error))
          this.BASE_API = this.OLDBASE_API
          Layer.close()
        }
      }
    )
  }

  create (BASE_API) {
    let instance = axiosObj[BASE_API]
    console.log(instance)
    if (!instance) {
      instance = axios.create({
        baseURL: BASE_API,
        timeout: 10000
      })
      axiosObj[BASE_API] = instance
    }
    return instance
  }
  handlerError (error) {
    if ((error + '').search('timeout') !== -1 || error.response === undefined) {   // 超时error捕获
      return Toast('网络请求失败')
    }
    return error
  }

  request (options, BASE_API) {

    this.instance = new Service({
      BASE_API,
      onRequest: this.onRequest,
      onResponse: this.onResponse
    })
    console.log(this.instance)
    return this.instance
  }
}

export default Service
