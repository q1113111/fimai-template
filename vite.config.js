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
  build: {
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 5000
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
  base: process.env.NODE_ENV === 'production' ? '/fimai-template/' : '/'
})
