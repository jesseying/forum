# 

---
## 一、系统目录
~~~
nsiForum
├── public    // 系统资源目录
├── src       // 主代码目录
│    └── api         // 接口目录
│         └── router      // 接口路由和类型控制
│    └── assets      // 静态资源存放目录
│    └── components      // 组件目录
│         └── common      // 全局组件目录该路径下的组件会被全局注册
│    └── mock      // 测试环境时使用，给接口添加模拟数据
│    └── router      // 页面路由，其中static.ts可以做动态路由
│    └── store      // 状态管理，pinia相关设置
│    └── styles      // styles设置，也可以设置全局共用样式（如loading.scss）
│    └── utils      // 全局工具方法设置
│    └── views      // 视图层目录
│    └── App.vue      // 视图层主入口
│    └── auto-imports.d.ts      // 全局生命周期设置，可以直接调
│    └── components.d.ts      // 该文件是运行时生成的，提供了全局的组件接口
│    └── main.ts      // 主配置，全局插件等
├── .dev.production       // 生产环境配置
├── .env.develop      // 开发环境
├── .env.test      // 测试环境
├── .editorconfig      // 代码样式设置
├── .eslintrc.cjs      // ESList配置
├── .prettierrc      // ESList配置
├── .eslintrc-auto-import.json      // 全局方法配置
├── .gitignore      // git配置
├── env.d.ts      // 环境配置
├── index.html      // 用户主入口
├── tsconfig.json      // ts项目编译配置
├── package.json      // 项目插件配置
~~~
---
## 二、
