import http from './index'

/**
 * get
 * @param {*} url
 * @param {*} params
 */
export const $get = (url, params) => {
  return new Promise((resolve, reject) => {
    const config = {
      url,
      method: 'get',
      params,
    }
    http.request(config)
      .then(({data: res}) => resolve(res), ({data: err} ) =>  reject(err) )
  })
}
/**
 * getDicInfo 处理结构复杂的query传参
 * @param {*} url
 * @param {*} query
 */
const $getDicInfo = (url, query) => {
  return new Promise((resolve, reject) => {
    (query !== undefined) && (url = `${ url }?query=${ encodeURI( JSON.stringify( query ) ) }`)//!important
    const config = {
      url,
      method: 'get',
    }
    http.request(config)
      .then(({data: res}) => resolve(res), ({data: err}) =>  reject(err))
  })
}
/**
 * post
 * @param {*} url
 * @param {*} data
 */
const $post = (url, data) => {
  return new Promise ((resolve, reject) => {
    const config = {
      url,
      method: 'post',
      data
    }
    http.request(config)
      .then(({data: res}) => resolve(res), ({data: err} ) =>  reject(err) )
  })
}
/**
 * 文件上传接口 需测试
 * @param {*} url
 * @param {*} data
 */
const $upload = (url, data) => {
  let params = new FormData()
  Object.keys(data).forEach(key => {
    params.append(key, data[key])
  })
  const config = {
    url,
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'},//传递文件 抬头类型
    data: params,
  }
  http.request(config)
    .then(({data: res}) => resolve(res), ({data: err} ) =>  reject(err) )
}


export default {
  $get, $getDicInfo, $post, $upload
}
