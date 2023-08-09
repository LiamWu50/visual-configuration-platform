import { useThemeStore } from '@/store/theme/theme'

import styles from './index.module.scss'

const Logo = defineComponent({
  name: 'Logo',
  setup() {
    const themeStore = useThemeStore()

    return { themeStore }
  },
  render() {
    return (
      <div
        class={[
          styles.logo,
          styles[`logo-${this.themeStore.darkTheme ? 'dark' : 'light'}`]
        ]}
      />
    )
  }
})

export default Logo
