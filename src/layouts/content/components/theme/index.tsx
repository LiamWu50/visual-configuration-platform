import { NButton } from 'naive-ui'

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
        {this.themeStore.darkTheme ? 'theme.light' : 'theme.dark'}
      </NButton>
    )
  }
})

export default Theme
