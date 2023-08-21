import {
  darkTheme,
  GlobalThemeOverrides,
  NConfigProvider,
  NMessageProvider
} from 'naive-ui'

import { useThemeStore } from '@/store/theme'
import themeList from '@/themes'

export default defineComponent({
  name: 'App',
  setup() {
    const themeStore = useThemeStore()
    const currentTheme = computed(() =>
      themeStore.darkTheme ? darkTheme : undefined
    )

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
