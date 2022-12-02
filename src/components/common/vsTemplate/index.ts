import type { App } from 'vue'
import vsTemplate from './src/Index.vue'
export default {
  install(app: App) {
    app.component('VsTemplate', vsTemplate)
  }
}
