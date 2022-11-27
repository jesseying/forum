// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
import type { LoginData, LoginRes, UserInfoRes } from '@/api/user/types'
/**
 * 登录
 */
function login(data: LoginData) {
  return http.post<LoginData>('/user/login', data)
}
/**
 * 获取登录用户信息
 */
function getUserInfo() {
  return http.get<UserInfoRes>('/user/info')
}

export { login, getUserInfo }
