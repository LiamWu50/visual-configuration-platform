import type { MenuOption } from 'naive-ui'
import { NMenu } from 'naive-ui'
import type { PropType } from 'vue'

import Logo from '../logo/index'
import styles from './index.module.scss'
import { useMenuClick } from './use-menuClick'

const Sidebar = defineComponent({
  name: 'Sidebar',
  props: {
    sideMenuOptions: {
      type: Array as PropType<any>,
      default: []
    },
    sideKey: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup() {
    const collapsedRef = ref(false)

    const options: MenuOption[] = [
      {
        label: '主页',
        key: '1'
      },
      {
        label: '2',
        key: '2'
      }
    ]

    const { handleMenuClick } = useMenuClick()

    return { collapsedRef, options, handleMenuClick }
  },
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <NMenu options={this.options} style='width: 180px' defaultValue='1' />
      </div>
    )
  }
})

export default Sidebar
