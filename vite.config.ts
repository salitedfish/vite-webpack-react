import { defineConfig } from 'vite'
import { terser } from 'rollup-plugin-terser'
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
    ],
    /**扩展名 */
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build:{
    target: 'modules',/**代码打包目标 */
    outDir: './viteDist',/**打包生成路径 */
    assetsDir: './assets',/**静态资源保存路径，相对于打包路径 */
    assetsInlineLimit: 4096,/**设置内联阈值 */
    cssCodeSplit: true,/**true启动异步的css代码拆分 */
    sourcemap:true,/**生成映射文件, true, inline, hidden */
    minify:"esbuild",

    // lib:{
    //   entry:"./src/main.tsx",
    //   name:'viteDist'
    // },/**构建为库时才需要 */
    rollupOptions:{
      output:{
        // chunkFileNames:'assets/thunk.[name].[contenthash:8].js' 
      },
      plugins:[terser()]/**感觉没啥用 */
    },/**自定义底层的rollup打包配置 */
  },
  esbuild: {

  },
  // css:{
  //   preprocessorOptions:{
  //     less:{
  //       additionalData: `$injectedColor: orange;`
  //     }
  //   }
  // },
  optimizeDeps:{
    
  },/**依赖优化选项 */
  server: {
    https: true,
    port:3000,
    open:false,
    // https:true,
    proxy: {
      '/api':{
        target: '/apiProxy',
        changeOrigin: true
      }
    },
  }
})
