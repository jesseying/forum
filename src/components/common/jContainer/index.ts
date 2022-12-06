import type { App } from 'vue'
import jContainer from './src/Index.vue'
export default {
  install(app: App) {
    app.component('JContainer', jContainer)
  }
}
