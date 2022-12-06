import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import type { ConfigEnv, ProxyOptions, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import PkgConfig from 'vite-plugin-package-config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteMockServe } from 'vite-plugin-mock'
import { loadEnv } from './src/utils/vite'
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const lifecycle = process.env.npm_lifecycle_event
  const { VITE_PORT, VITE_OPEN, VITE_BASE_PATH, VITE_OUT_DIR, VITE_PROXY_URL } = loadEnv(mode)
  let proxy: Record<string, string | ProxyOptions> = {}
  if (VITE_PROXY_URL) {
    proxy = {
      '/api': {
        target: VITE_PROXY_URL,
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }
  return {
    base: VITE_BASE_PATH,
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock', //mock文件地址
        localEnabled: !!process.env.USE_MOCK, // 开发打包开关
        prodEnabled: !!process.env.USE_CHUNK_MOCK, // 生产打包开关
        logger: false, //是否在控制台显示请求日志
        supportTs: true
      }),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],

        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dts: 'src/components.d.ts',
        deep: true,
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ]
      }),
      PkgConfig(),
      OptimizationPersist(),
      lifecycle === 'report' ? visualizer({ open: true, brotliSize: true, filename: 'report.html' }) : null
    ],
    server: {
      port: VITE_PORT,
      proxy: proxy,
      open: VITE_OPEN
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
          modifyVars: {
            // hack: `true; @import 'ant-design-vue/dist/antd.variable.less'`,
            // '@primary-color': '#eb2f96', // 全局主色
          }
          // charset: false,
          // additionalData: '@import "./src/assets/less/common.less";'
        }
      }
    },
    optimizeDeps: {
      // include: ['@ant-design/icons-vue', 'element-plus']
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      outDir: VITE_OUT_DIR, //指定输出路径
      assetsDir: 'assets' //指定生成静态资源的存放路径
    }
  }
})
