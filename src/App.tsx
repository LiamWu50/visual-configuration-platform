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
    const themeStore = useThemeStore()
    const currentTheme = computed(() =>
      themeStore.darkTheme ? darkTheme : undefined
    )
    const { setScrollbarStyle } = useScrollbar()

    onMounted(() => {
      setScrollbarStyle()
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
