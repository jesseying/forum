import type { App } from 'vue'
import jTable from './src/Index.vue'
export default {
  install(app: App) {
    app.component('JTable', jTable)
  }
}
