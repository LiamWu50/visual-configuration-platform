import type { Component } from 'vue'

import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

export default {
  path: '/design-space',
  name: 'design-space',
  meta: {
    title: 'design-space'
  },
  component: components['design-space']
}
