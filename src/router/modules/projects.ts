import type { Component } from 'vue'

import utils from '@/utils'

const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

export default {
  path: '/',
  name: 'projects',
  meta: {
    title: '项目管理'
  },
  redirect: { name: 'projects-draft' },
  component: () => import('@/layouts/content'),
  children: [
    {
      path: '/projects/draft',
      name: 'projects-draft',
      component: components['projects-draft'],
      meta: {
        title: '草稿',
        activeMenu: 'draft',
        showSide: false,
        auth: []
      }
    },
    {
      path: '/projects/template',
      name: 'projects-template',
      component: components['projects-template'],
      meta: {
        title: '模板',
        activeMenu: 'projects-template',
        showSide: false,
        auth: []
      }
    },
    {
      path: '/projects/component-library',
      name: 'component-library',
      component: components['projects-component-library'],
      meta: {
        title: '组件库',
        activeMenu: 'component-library',
        showSide: false,
        auth: []
      }
    },
    {
      path: '/projects/data-manage',
      name: 'data-manage',
      component: components['projects-data-manage'],
      meta: {
        title: ' 数据管理',
        activeMenu: 'data-manage',
        showSide: false,
        auth: []
      }
    }
  ]
}
