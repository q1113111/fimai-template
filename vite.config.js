import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { svgBuilder } from './plugins/svgBuilder'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    svgBuilder('./src/assets/icon/')
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/Resource': {
        target: 'http://microchat-fileservice.fiamichattest.com',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/fimai-template/' : './'
})
