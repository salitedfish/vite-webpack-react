import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base:'./',
  resolve: {
    alias: [
      {
        find:'@',replacement:path.resolve(__dirname,'src')
      },
      {
        find:'@img',replacement:path.resolve(__dirname,'src/img')
      },
      {
        find:'@component',replacement:path.resolve(__dirname,'src/component')
      },
    ]
  },
  server: {
    port:3000,
    open:true,
    // https:true,
    proxy: {
      '/api':{
        target: '/apiProxy',
        changeOrigin: true
      }
    }
  }
})
