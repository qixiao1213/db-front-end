import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import createVuePlugin from 'vite-plugin-legacy';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createVuePlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.starstens.com:5000/8000/', // 设置目标服务器的地址
        changeOrigin: true, // 设置请求头中的 Host 字段为目标服务器的地址
        rewrite: (path) => path.replace(/^\/api/, '') // 重写请求路径，去掉前缀 '/api'
      }
    }
  }
})
