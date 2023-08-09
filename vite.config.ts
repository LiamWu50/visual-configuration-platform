import path from 'path'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

import presets from './build/presets'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const isBuild = env.command === 'build'
  const viteEnv = loadEnv(env.mode, `.env.${env.mode}`)

  const { VITE_PORT } = viteEnv

  return {
    base: viteEnv.VITE_BASE,
    plugins: [presets(env, isBuild)],
    resolve: {
      // 设置别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0', // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
      port: 5172, // 端口
      open: false, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        '/api': {
          // 本地 8000 前端代码的接口 代理到 8888 的服务端口
          target: 'http://localhost:8888/',
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    build: {
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 在生产环境移除console.log
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: "@import '@/assets/styles/variables.scss';"
        }
      }
    }
  }
})
