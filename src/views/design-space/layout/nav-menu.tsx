import { ArrowBack, Menu as MenuIcon } from '@vicons/ionicons5'
import { NButton, NDropdown, NIcon, useMessage } from 'naive-ui'
import type { Component } from 'vue'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: '返回',
    key: 'return',
    icon: renderIcon(ArrowBack)
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '文件',
    key: 'file'
  },
  {
    label: '编辑',
    key: 'edit'
  },
  {
    label: '图层',
    key: 'layer',
    children: [
      {
        label: '图层1',
        key: 'layer1'
      },
      {
        label: '图层2',
        key: 'layer2'
      }
    ]
  }
]

export default defineComponent({
  name: 'NavMenu',
  setup() {
    const handleSelect = (key: string | number) => {
      window.$message.info(String(key))
    }

    return () => (
      <NDropdown
        options={options}
        placement='bottom-start'
        trigger='click'
        onSelect={handleSelect}
      >
        <NButton text>
          <NIcon size={20}>
            <MenuIcon />
          </NIcon>
        </NButton>
      </NDropdown>
    )
  }
})
