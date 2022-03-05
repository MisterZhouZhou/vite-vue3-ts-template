import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

const pathResolve = (dir: string) => resolve(__dirname, dir)
console.log('$---', pathResolve('src'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    styleImport({
      // 样式按需引入
      resolves: [VantResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  css: {
    // css预处理
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/global.less";' // 加载全局样式，使用less特性
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://API网关所在域名',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
