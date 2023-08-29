import { PersonOutlined } from '@vicons/material'
import { NAvatar, NDropdown, NIcon } from 'naive-ui'
import type { PropType } from 'vue'

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
        <NAvatar size='small'>
          <NIcon>
            <PersonOutlined />
          </NIcon>
        </NAvatar>
      </NDropdown>
    )
  }
})

export default User
