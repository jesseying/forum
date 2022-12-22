import axios from 'axios'
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

/* 请求拦截器 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //  伪代码
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  (error: AxiosError) => {
    ElMessage.error(error.message)
  }
)

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data
    // 根据自定义错误码判断请求是否成功
    if (code === 200) {
      // 将组件用的数据返回
      return response.data
    } else {
      // 处理业务错误。
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message: string
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 302:
        message = 'Interface redirected!'
        break
      case 400:
        message = 'Incorrect parameter!'
        break
      case 401:
        message = 'You are not logged in, or the login has timed out. Please log in first!'
        break
      case 403:
        message = 'You do not have permission to operate!'
        break
      case 404:
        message = 'Not found!'
        break
      case 408:
        message = 'Time out!'
        break
      case 409:
        message = 'The same data already exists in the system!'
        break
      case 500:
        message = 'Server internal error!'
        break
      case 501:
        message = 'Service error!'
        break
      case 502:
        message = 'Gateway error!'
        break
      case 503:
        message = 'Service unavailable!'
        break
      case 504:
        message = 'The service is temporarily unavailable. Please try again later!'
        break
      case 505:
        message = 'HTTP version is not supported!'
        break
      default:
        // @ts-ignore
        message = error.response?.data.message
        break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)

/* 导出封装的请求方法 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}
