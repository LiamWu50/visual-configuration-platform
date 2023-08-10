import { SettingOutlined } from '@vicons/antd'
import { NButton, NIcon, NMenu } from 'naive-ui'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Logo from '../logo'
import Theme from '../theme'
import User from '../user'
import styles from './index.module.scss'

const Navbar = defineComponent({
  name: 'Navbar',
  props: {
    headerMenuOptions: {
      type: Array as PropType<any>,
      default: []
    },
    localesOptions: {
      type: Array as PropType<any>,
      default: []
    },
    timezoneOptions: {
      type: Array as PropType<any>,
      default: []
    },
    userDropdownOptions: {
      type: Array as PropType<any>,
      default: []
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const menuKey = ref(route.meta.activeMenu as string)

    const handleMenuClick = (key: string) => {
      router.push({ path: `/${key}` })
    }

    const handleUISettingClick = () => {
      router.push({ path: '/ui-setting' })
    }

    watch(
      () => route.path,
      () => {
        menuKey.value = route.meta.activeMenu as string
      }
    )

    return { handleMenuClick, handleUISettingClick, menuKey }
  },
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <div class={styles.nav}>
          <NMenu
            value={this.menuKey}
            mode='horizontal'
            options={this.headerMenuOptions}
            onUpdateValue={this.handleMenuClick}
          />
        </div>
        <div class={styles.settings}>
          <NButton quaternary onClick={this.handleUISettingClick}>
            {{
              icon: () => (
                <NIcon size='16'>
                  <SettingOutlined />
                </NIcon>
              ),
              default: 'menu.ui_setting'
            }}
          </NButton>
          <Theme />
          <User userDropdownOptions={this.userDropdownOptions} />
        </div>
      </div>
    )
  }
})

export default Navbar