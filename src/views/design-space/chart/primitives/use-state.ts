import { Cube, DocumentTextSharp, PieChart } from '@vicons/ionicons5'

import { primitivesList } from '@/primitives/loader'
import { Primitive } from '@/primitives/primitive'
import { renderIcon } from '@/utils/common'

export interface PrimitiveOptions {
  label: string
  key: string
  icon: any
  primitives: Primitive[]
}

export function useState() {
  const primitiveOptions: PrimitiveOptions[] = [
    {
      label: '基础组件',
      key: 'basic',
      icon: renderIcon(Cube),
      primitives: []
    },
    {
      label: '图表',
      key: 'chart',
      icon: renderIcon(PieChart),
      primitives: []
    },
    {
      label: '文本',
      key: 'text',
      icon: renderIcon(DocumentTextSharp),
      primitives: []
    }
  ]

  const dataSource: Primitive[] = Object.keys(primitivesList).map(
    (key) => new primitivesList[key]()
  )

  const getPrimitiveOptions = () => {
    primitiveOptions.forEach((item) => {
      item.primitives = dataSource.filter((l) => l.group === item.key)
    })
  }

  return {
    primitiveOptions,
    getPrimitiveOptions
  }
}
