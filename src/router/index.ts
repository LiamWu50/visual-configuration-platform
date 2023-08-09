import 'nprogress/nprogress.css'

// NProgress
import NProgress from 'nprogress'
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'production' ? '/' : '/'),
  routes
})

/**
 * Routing to intercept
 */
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    NProgress.start()
    next()
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router
