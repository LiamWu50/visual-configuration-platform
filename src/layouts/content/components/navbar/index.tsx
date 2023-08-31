import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

import Github from '../github'
import Theme from '../theme'
import User from '../user'
import styles from './index.module.scss'

const Navbar = defineComponent({
  name: 'Navbar',
  props: {
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
    const router = useRouter()

    const handleMenuClick = (key: string) => {
      router.push({ path: `/${key}` })
    }

    const handleUISettingClick = () => {
      router.push({ path: '/ui-setting' })
    }

    return { handleMenuClick, handleUISettingClick }
  },
  render() {
    return (
      <div class={styles.container}>
        <div class={styles.settings}>
          <Theme />
          <Github />
          <User userDropdownOptions={this.userDropdownOptions} />
        </div>
      </div>
    )
  }
})

export default Navbar
