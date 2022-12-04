/* 路由接口参数类型 */
export interface RouterInfoRes {
  code: number
  data: string | object
  // data: [
  // {
  //   path: string
  //   name: string
  //   meta: { title: string }
  //   component: object
  // }
  // ]
  msg: string
}
