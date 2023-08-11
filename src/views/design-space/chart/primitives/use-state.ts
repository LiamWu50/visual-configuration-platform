import { Cube, DocumentTextSharp, PieChart } from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { Component, h } from 'vue'

import { primitivesList } from '@/primitives/loader'

export function useState() {
  const selected = ref('basic')
  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const menuOptions: MenuOption[] = [
    {
      label: ' 基础组件',
      key: 'basic',
      icon: renderIcon(Cube)
    },
    {
      label: '图表',
      key: 'chart',
      icon: renderIcon(PieChart)
    },
    {
      label: '文本',
      key: 'text',
      icon: renderIcon(DocumentTextSharp)
    }
  ]

  const dataSource = Object.keys(primitivesList).map(
    (key) => new primitivesList[key]()
  )

  const selectedPrimitives = computed(() =>
    dataSource.filter((l) => l.group === selected.value)
  )

  return {
    selected,
    menuOptions,
    selectedPrimitives
  }
}
