import { defineStore } from 'pinia'

import RouteState from './types'

export const useRouteStore = defineStore({
  id: 'route',
  state: (): RouteState => ({
    lastRoute: 'projects'
  }),
  persist: true,
  getters: {
    getLastRoute(): string {
      return this.lastRoute
    }
  },
  actions: {
    setLastRoute(lastRoute: string): void {
      this.lastRoute = lastRoute
    }
  }
})
