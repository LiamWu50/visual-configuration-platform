import { useEditorStore } from '@/store/editor/index'

import styles from './index.module.scss'

export default defineComponent({
  name: 'StyleSettings',
  setup() {
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    return () => (
      <div class={styles.styleSettings}>
        {curPrimitive.value
          ? h(resolveComponent(`${curPrimitive.value?.cName}Attrs`))
          : null}
      </div>
    )
  }
})
