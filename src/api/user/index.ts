// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
import type { LoginData, UserInfoRes } from '@/api/user/types'
/**
 * 登录
 */
function login(data: LoginData) {
  return http.post<LoginData>('/login', data)
}
/**
 * 获取登录用户信息
 */
function getUserInfo() {
  return http.get<UserInfoRes>('/userinfo')
}

export { login, getUserInfo }
