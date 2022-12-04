import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { getRouters } from '@/api/router'
// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const hasGithubPages = import.meta.env.VITE_GHPAGES
let routerData: any
getRouters().then((res) => {
  routerData = res.data
  console.log(res)
})
console.log(routerData)
export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { title: 'Index' },
      component: () => import('../views/Index.vue')
      // redirect: '/'
      // children: [
      //   {
      //     path: '/index',
      //     name: 'index',
      //     meta: { title: 'index' },
      //     component: () => import('')
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Login' },
      component: () => import('../views/Login.vue')
    }
  ]
})
