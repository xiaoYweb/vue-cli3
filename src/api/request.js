import http from './index'

/**
 * get
 * @param {*} url
 * @param {*} params
 */
const $get = (url, params) => {
  const config = {
    url,
    method: 'get',
    params,
  }
  return http.request(config)
    .then((res) => resolve(res), (err) => reject(err))
}
/**
 * getDicInfo 处理结构复杂的query传参
 * @param {*} url
 * @param {*} query
 */
const $getDicInfo = (url, query) => {
  const config = {
    url,
    method: 'get',
    params,
  }
  return http.request(config)
    .then((res) => resolve(res), (err) => reject(err))
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
    return http.request(config)
    .then((res) => resolve(res), (err) => reject(err))
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
  return http.request(config)
    .then((res) => resolve(res), (err) => reject(err))
}


export default {
  $get, $getDicInfo, $post, $upload
}
