import { useEditorStore } from '@/store/editor/index'

import CanvasSettings from './canvas-setting'
import styles from './index.module.scss'

export default defineComponent({
  name: 'styleSettings',
  setup() {
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    return () => (
      <div class={styles.styleSettings}>
        {curPrimitive.value ? (
          h(resolveComponent(`${curPrimitive.value?.cName}Attrs`))
        ) : (
          <CanvasSettings />
        )}
      </div>
    )
  }
})
