import { LightModeOutlined, NightlightOutlined } from '@vicons/material'
import { NButton, NIcon } from 'naive-ui'

import { useThemeStore } from '@/store/theme/index'

import styles from './index.module.scss'

const Theme = defineComponent({
  name: 'Theme',
  setup() {
    const themeStore = useThemeStore()

    return { themeStore }
  },
  render() {
    return (
      <NButton
        class={styles.theme}
        quaternary
        onClick={() => (this.themeStore.darkTheme = !this.themeStore.darkTheme)}
      >
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
