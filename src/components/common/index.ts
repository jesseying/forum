import type { App } from 'vue'
import JTable from '@/components/common/jTable'
import vsTemplate from '@/components/common/vsTemplate'
import jContainer from '@/components/common/jContainer'
// 注册组件
const components = [JTable, vsTemplate, jContainer]
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
