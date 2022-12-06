import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from '@/router/static'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { loading } from '@//utils/loading'
// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes
})
router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false })
  NProgress.start()
  if (!window.existLoading) {
    loading.show()
    window.existLoading = true
  }
  next()
})

// 路由加载后
router.afterEach(() => {
  if (window.existLoading) {
    loading.hide()
  }
  NProgress.done()
})

export default router
