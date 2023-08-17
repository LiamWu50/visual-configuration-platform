import { useEditorStore } from '@/store/editor/index'

export default defineComponent({
  name: 'StyleSettings',
  setup() {
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    return () => (
      <>
        {curPrimitive.value
          ? h(resolveComponent(`${curPrimitive.value?.cName}Attrs`))
          : null}
      </>
    )
  }
})
