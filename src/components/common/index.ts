import type { App } from 'vue'
import JTable from '@/components/common/jTable'
import vsTemplate from '@/components/common/vsTemplate'
// 注册组件
const components = [JTable, vsTemplate]
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
