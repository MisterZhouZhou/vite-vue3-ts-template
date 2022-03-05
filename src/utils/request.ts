/*
 * @Author: misterzhou
 * @Date: 2022-03-05 13:26:07
 * @LastEditTime: 2022-03-05 13:30:00
 * @LastEditors: misterzhou
 * @FilePath: /mz-music/src/utils/request.ts
 * @Description: axios 请求封装
 */
import axios from 'axios'
import { CT } from '@/config/config'
import { Toast } from 'vant'

// 创建 axios 实例
const request = axios.create({
  timeout: CT.timeout // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data
    Toast(data.message)
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config) => {
  // 自定义全局header
  config.headers = config.headers ? config.headers : {}
  config.headers['Content-Type'] = 'application/json'
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response
}, errorHandler)

export default request
