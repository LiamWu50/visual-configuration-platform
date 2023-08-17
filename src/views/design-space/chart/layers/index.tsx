import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor/index'

import styles from './index.module.scss'

export default defineComponent({
  name: 'Layers',
  setup() {
    const editorStore = useEditorStore()
    const primitives = editorStore.primitives as Primitive[]

    const renderLayerItems = () =>
      primitives.map((item: Primitive) => (
        <div class={styles.layerItem}>
          <span>{item.name}</span>
        </div>
      ))

    return () => (
      <div class={styles.layers}>
        <div>
          <span>图层</span>
        </div>
        <div class={styles.container}>{renderLayerItems()}</div>
      </div>
    )
  }
})
