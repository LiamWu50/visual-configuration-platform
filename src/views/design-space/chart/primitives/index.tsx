import { CaretForwardOutline } from '@vicons/ionicons5'
import { NCollapse, NCollapseItem, NIcon } from 'naive-ui'

import imageSrc from '@/assets/images/editor/img.jpg'
import { Primitive } from '@/primitives/primitive'

import styles from './index.module.scss'
import { PrimitiveOptions, useState } from './use-state'

export default defineComponent({
  name: 'Primitives',
  setup() {
    const { primitiveOptions, getPrimitiveOptions } = useState()

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      e.dataTransfer!.setData('name', target.dataset.name as string)
    }

    watchEffect(() => getPrimitiveOptions())

    const renderPrimitive = (item: PrimitiveOptions) =>
      item.primitives.map((item: Primitive) => (
        <div key={item.id} class={styles.primitive}>
          <span>{item.name}</span>
          <img src={imageSrc} draggable={true} data-name={item.cName} />
        </div>
      ))

    return () => (
      <div class={styles.container} onDragstart={handleDragStart}>
        <NCollapse
          v-slots={{
            arrow: () => (
              <NIcon size={12}>
                <CaretForwardOutline />
              </NIcon>
            )
          }}
        >
          {primitiveOptions.map((item) => (
            <NCollapseItem title={item.label} name={item.key}>
              <div class={styles.primitives}>{renderPrimitive(item)}</div>
            </NCollapseItem>
          ))}
        </NCollapse>
      </div>
    )
  }
})
