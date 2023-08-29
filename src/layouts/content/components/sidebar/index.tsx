import { AreaChartTwotone, PublicTwotone } from '@vicons/material'
import type { MenuOption } from 'naive-ui'
import { NMenu } from 'naive-ui'
import type { PropType } from 'vue'

import { renderIcon } from '@/utils/common'

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
    const sideKeyRef = ref()
    const collapsedRef = ref(false)

    const options: MenuOption[] = [
      {
        label: '大屏可视化',
        key: 'largeScreenVisualization',
        icon: renderIcon(AreaChartTwotone)
      },
      {
        label: '三维地球',
        key: '3dEarth',
        icon: renderIcon(PublicTwotone)
      }
    ]

    const { handleMenuClick } = useMenuClick()

    return { sideKeyRef, collapsedRef, options, handleMenuClick }
  },
  render() {
    return (
      <div class={styles.container}>
        <Logo />
        <NMenu
          value={this.sideKeyRef}
          options={this.options}
          defaultValue='largeScreenVisualization'
          onUpdateValue={this.handleMenuClick}
        />
      </div>
    )
  }
})

export default Sidebar
