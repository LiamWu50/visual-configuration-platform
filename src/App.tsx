import {
  darkTheme,
  GlobalThemeOverrides,
  NConfigProvider,
  NMessageProvider
} from 'naive-ui'

import { useScrollbar } from '@/hooks/use-scrollbar'
import { useThemeStore } from '@/store/theme'
import themeList from '@/themes'

export default defineComponent({
  name: 'App',
  setup() {
    const prefersSchemeKey = '(prefers-color-scheme: dark)'

    const themeStore = useThemeStore()
    const currentTheme = computed(() =>
      themeStore.darkTheme ? darkTheme : undefined
    )
    const { setScrollbarStyle } = useScrollbar()

    const setThemeStyle = (isDark: boolean) => {
      themeStore.setDarkTheme(isDark)
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    }

    const bindThemeMedia = () => {
      const themeMedia = window.matchMedia(prefersSchemeKey)
      themeMedia.addEventListener('change', (e) => {
        const isDark = e.matches
        setThemeStyle(isDark)
      })
    }

    onMounted(() => {
      setScrollbarStyle()
      bindThemeMedia()

      const themeMedia = window.matchMedia(prefersSchemeKey)
      const isDark = themeMedia.matches
      setThemeStyle(isDark)
    })

    return {
      currentTheme
    }
  },
  render() {
    const themeOverrides: GlobalThemeOverrides =
      themeList[this.currentTheme ? 'dark' : 'light']

    return (
      <NConfigProvider
        theme={this.currentTheme}
        themeOverrides={themeOverrides}
        style={{
          width: '100%',
          height: '100vh'
        }}
      >
        <NMessageProvider>
          <router-view />
        </NMessageProvider>
      </NConfigProvider>
    )
  }
})
