import 'nprogress/nprogress.css'

// NProgress
import NProgress from 'nprogress'
import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
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
