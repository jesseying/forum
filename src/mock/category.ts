// mock/user.ts
// import { Mock } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
export default [
  // 获取用户信息
  {
    url: 'rest/categories',
    method: 'get',
    response: (res: any) => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            _id: '624c33373f14c9e97ffd6575',
            name: '新闻分类'
          },
          {
            _id: '624d36e50299abb2478ae3ab',
            name: '新闻',
            parent: '624c33373f14c9e97ffd6575'
          }
          ]
      }
    }
  }
] as MockMethod[]
