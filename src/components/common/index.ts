import type { App } from 'vue'
import JTable from '@/components/common/jTable'

// 注册组件
const components = [JTable]
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
