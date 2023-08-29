import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import utils from '@/utils'

import designSpacePage from './modules/design-space'
import projectsPage from './modules/projects'

const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)

/**
 * 基础页面
 */
const basePage: RouteRecordRaw[] = [projectsPage, designSpacePage]

/**
 * 登录页面
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
