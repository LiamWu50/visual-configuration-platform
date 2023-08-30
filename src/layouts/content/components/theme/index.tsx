import { LightModeOutlined, NightlightOutlined } from '@vicons/material'
import { NButton, NIcon } from 'naive-ui'

import { useThemeStore } from '@/store/theme/index'

import styles from './index.module.scss'

const Theme = defineComponent({
  name: 'Theme',
  setup() {
    const themeStore = useThemeStore()

    const handelSwitchTheme = () => {
      const isDark = !themeStore.darkTheme
      themeStore.setDarkTheme(isDark)
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    }

    return { themeStore, handelSwitchTheme }
  },
  render() {
    return (
      <NButton class={styles.theme} quaternary onClick={this.handelSwitchTheme}>
        <NIcon size={20}>
          {this.themeStore.darkTheme ? (
            <NightlightOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </NIcon>
      </NButton>
    )
  }
})

export default Theme
