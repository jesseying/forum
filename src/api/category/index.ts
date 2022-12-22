// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
import type { categories } from '@/api/category/types'
/**
 * 分类列表
 */
function getCategories() {
  return http.get<categories>('rest/categories').then((res) => res)
}
export { getCategories }
