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
    const { handleMenuClick } = useMenuClick()

    return { handleMenuClick }
  },
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <NMenu
          value={this.sideKey}
          options={this.sideMenuOptions}
          defaultValue='largeScreenVisualization'
          onUpdateValue={this.handleMenuClick}
        />
      </div>
    )
  }
})

export default Sidebar
