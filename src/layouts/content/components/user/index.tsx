import { DownOutlined, UserOutlined } from '@vicons/antd'
import { NButton, NDropdown, NIcon } from 'naive-ui'
import type { PropType } from 'vue'

import styles from './index.module.scss'
import { useDropDown } from './use-dropdown'

const User = defineComponent({
  name: 'User',
  props: {
    userDropdownOptions: {
      type: Array as PropType<any>,
      default: []
    }
  },
  setup() {
    const { handleSelect } = useDropDown()

    return { handleSelect }
  },
  render() {
    return (
      <NDropdown
        trigger='hover'
        show-arrow
        options={this.userDropdownOptions}
        on-select={this.handleSelect}
      >
        <NButton text>
          <NIcon class={styles.icon}>
            <UserOutlined />
          </NIcon>
          张三
          <NIcon class={styles.icon}>
            <DownOutlined />
          </NIcon>
        </NButton>
      </NDropdown>
    )
  }
})

export default User
