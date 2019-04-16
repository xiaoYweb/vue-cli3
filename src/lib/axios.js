import axios from 'axios'
import baseUrl from '@/config'

class httpRequest {
  constructor (baseURL = baseUrl) {
    this.baseURL = baseURL
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      timeout: 5000,
      headers: {
        //
      }
    }
    return config
  }
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      // console.log('err', err)
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res => {

      if (res && res.data.code === 401) { // 401, token失效   //接口判断token 是否过期 重定向login页面
        console.log(res)
        clearLoginInfo()
        router.push({ name: 'login' })
        return Promise.reject(res)
      }

      return res
    }, err => {
      return Promise.reject(err)
    })
  }
  request (options) {
    const instance = axios.create()
    const config = Object.assign(this.getInsideConfig(), options)
    // this.interceptors(instance, options.url)
    return instance(config)
  }
}
export default httpRequest

/**
 * const config = {
 *  url: '/user',
 *  method: 'get',
 *  baseURL: 'https://some-domain.com/api/',
 *  transformRequest: [function (data) {
      // 对 data 进行任意转换处理

      return data;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理

      return data;
    }],
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: {
      ID: 12345
    },
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data: {
      firstName: 'Fred'
    },
    timeout: 1000,
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
      return status >= 200 && status < 300; // 默认的
    },

 * }
 *
 *
 * 响应结构
 * {
    // `data` 由服务器提供的响应
    data: {},

    // `status` 来自服务器响应的 HTTP 状态码
    status: 200,

    // `statusText` 来自服务器响应的 HTTP 状态信息
    statusText: 'OK',

    // `headers` 服务器响应的头
    headers: {},

    // `config` 是为请求提供的配置信息
    config: {}
  }
 *
 *
 */
