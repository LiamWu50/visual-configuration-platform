import { NLayoutSider, NMenu } from 'naive-ui'
import type { PropType } from 'vue'

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
    const defaultExpandedKeys = [
      'workflow',
      'task',
      'udf-manage',
      'service-manage',
      'statistical-manage',
      'task-group-manage'
    ]

    const { handleMenuClick } = useMenuClick()

    return { collapsedRef, defaultExpandedKeys, handleMenuClick }
  },
  render() {
    return (
      <NLayoutSider
        bordered
        nativeScrollbar={false}
        show-trigger='bar'
        collapse-mode='width'
        collapsed={this.collapsedRef}
        onCollapse={() => (this.collapsedRef = true)}
        onExpand={() => (this.collapsedRef = false)}
      >
        <NMenu
          class='tab-vertical'
          value={this.sideKey}
          options={this.sideMenuOptions}
          defaultExpandedKeys={this.defaultExpandedKeys}
          onUpdateValue={this.handleMenuClick}
        />
      </NLayoutSider>
    )
  }
})

export default Sidebar
