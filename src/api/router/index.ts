// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
import type { RouterInfoRes } from '@/api/router/types'

/**
 * 获取登录用户信息
 */
function getRouters() {
  return http.get<RouterInfoRes>('/router/info')
}

export { getRouters }
