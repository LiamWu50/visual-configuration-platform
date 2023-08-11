import { NMenu } from 'naive-ui'

import { Primitive } from '@/primitives/primitive'

import styles from './index.module.scss'
import { useState } from './use-state'

export default defineComponent({
  name: 'Primitives',
  setup() {
    const { selected, menuOptions, selectedPrimitives } = useState()

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      e.dataTransfer!.setData('name', target.dataset.name as string)
    }

    const handleUpdateMenu = (val: string) => {
      selected.value = val
    }

    return {
      selected,
      menuOptions,
      selectedPrimitives,
      handleDragStart,
      handleUpdateMenu
    }
  },
  render() {
    const { handleDragStart, menuOptions, selected } = this
    return (
      <div class={styles.container} onDragstart={handleDragStart}>
        <NMenu
          value={selected}
          options={menuOptions}
          onUpdate:value={this.handleUpdateMenu}
        />
        <div class={styles.primitives}>
          {this.selectedPrimitives.map((item: Primitive) => (
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
      </div>
    )
  }
})
