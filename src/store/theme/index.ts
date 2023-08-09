import { defineStore } from 'pinia'

import ThemeState from './types'

export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeState => ({
    darkTheme: false
  }),
  persist: true,
  getters: {
    getTheme(): boolean {
      return this.darkTheme
    }
  },
  actions: {
    setDarkTheme(): void {
      this.darkTheme = !this.darkTheme
    }
  }
})
