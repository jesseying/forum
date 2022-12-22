import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css' 官方暗黑模式样式
import router from './router'
import App from './App.vue'
import CustomCompoments from './components/common'

const app = createApp(App)
// console.log(import.meta.env)
app.use(router)
app.use(CustomCompoments)
app.use(ElementPlus)
app.mount('#app')
