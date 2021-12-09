import axios from 'axios'
import store from '@/store'
import router from '@/router'
const instance = axios.create({
  // 基础路径
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
  // timeout: 5000
})
instance.interceptors.request.use(config => {
  // 全局注入token
  const { token } = store.state.user.profile
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))
// 处理返回数据 token失效跳回到登录页
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response && error.response.status === 401) {
    // 被动 跳转登录 不可返回  replace
    // 登录可继续浏览
    // encodeURIComponent 转换uri编码，防止解析地址出问题
    // 最新版本的路由获取完整路径需要加上额外的value - router.currentRoute.value.fullPath
    store.dispatch('user/logOut')
    const redirectUrl = encodeURIComponent(router.currentRoute.value.fullPath)
    // 退出清除之前信息
    router.replace(`/login?redirectUrl=${redirectUrl}`)
  }
  return Promise.reject(error)
})
// 二次封装
const request = (url, method, data) => {
  // 返回promise
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
export default request
