import { darkTheme, GlobalThemeOverrides } from 'naive-ui'

import { useThemeStore } from '@/store/theme'
import themeList from '@/themes'

export default defineComponent({
  name: 'App',
  setup() {
    const themeStore = useThemeStore()
    const currentTheme = computed(() =>
      themeStore.darkTheme ? darkTheme : undefined
    )

    const themeOverrides: GlobalThemeOverrides =
      themeList[currentTheme ? 'dark' : 'light']

    return () => (
      <n-configProvider
        theme={currentTheme.value}
        theme-overrides={themeOverrides}
        style={{
          width: '100%',
          height: '100vh'
        }}
      >
        <n-messageProvider>
          <router-view />
        </n-messageProvider>
      </n-configProvider>
    )
  }
})
