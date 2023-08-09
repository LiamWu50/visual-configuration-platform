import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import {
  NaiveUiResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import cesium from 'vite-plugin-cesium'
import viteCompression from 'vite-plugin-compression'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default (env, isBuild) => {
  const plugins = [
    vue({
      // 开启Reactivity Transform 语法糖
      reactivityTransform: true
    }),
    vueJsx(),
    cesium(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    VueSetupExtend(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dts: './src/components.d.ts',
      extensions: ['vue', 'tsx', 'md'],
      include: [/\.tsx$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components/'],
      resolvers: [VueUseComponentsResolver(), NaiveUiResolver()]
    })
  ]

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return plugins
}
