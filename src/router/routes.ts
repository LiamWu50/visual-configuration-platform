import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import utils from '@/utils'

import designSpace from './modules/design-space'

// All TSX files under the views folder automatically generate mapping relationship
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

/**
 * Basic page
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'design-space' },
    meta: { title: '项目列表' },
    component: () => import('@/layouts/content'),
    children: [
      {
        path: '/project',
        name: 'project',
        component: components['project'],
        meta: {
          title: '项目列表',
          activeMenu: 'project',
          auth: []
        }
      }
    ]
  },
  designSpace
]

/**
 * Login page
 */
const loginPage: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: components['login'],
    meta: {
      auth: []
    }
  }
]

const routes: RouteRecordRaw[] = [...basePage, ...loginPage]

// 重新组织后导出
export default routes
