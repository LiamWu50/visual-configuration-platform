import type { Component } from 'vue'

import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

export default {
  path: '/preview',
  name: 'preview',
  meta: {
    title: ' 预览'
  },
  component: components['preview']
}
