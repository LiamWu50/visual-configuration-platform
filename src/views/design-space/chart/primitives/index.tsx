import { primitivesList } from '@/primitives/loader'
import { Primitive } from '@/primitives/primitive'

import styles from './index.module.scss'

export default defineComponent({
  name: 'Primitives',
  setup() {
    const dataSource = Object.keys(primitivesList).map(
      (key) => new primitivesList[key]()
    )

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      e.dataTransfer!.setData('name', target.dataset.name as string)
    }

    return () => (
      <div class={styles.container} onDragstart={handleDragStart}>
        {dataSource.map((item: Primitive) => (
          <div
            key={item.id}
            class={styles.item}
            draggable={true}
            data-name={item.cName}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    )
  }
})
