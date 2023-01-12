// import request, { http } from '@/utils/request'
import { http } from '@/utils/request'
import type { articles } from '@/api/article/types'
/**
 * 新闻列表
 */
function getArticles() {
  return http.get<articles>('rest/articles')
}
export { getArticles }
