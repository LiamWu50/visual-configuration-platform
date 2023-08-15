import GroupPrimitive from '@/primitives/components/group/primitive'
import { Primitive } from '@/primitives/primitive'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import { createGroupStyle, decomposePrimitive } from '@/utils/primitive'

export function useCompose() {
  const editorStore = useEditorStore()
  const areaSelectStore = useAreaSelectStore()
  const { curPrimitive } = storeToRefs(editorStore)
  const { groupStyle, childPrimitives } = storeToRefs(areaSelectStore)

  // 合并 primitive
  const handleCompose = () => {
    const components = [] as Primitive[]
    const primitives = childPrimitives.value as Primitive[]
    primitives.forEach((primitive) => {
      // 如果要组合的组件中，已经存在组合数据，则需要提前拆分
      if (primitive.cName === 'Group') {
        const parentStyle = { ...primitive.style }
        const editor = document.querySelector('#editor')
        const editorRect = editor!.getBoundingClientRect()

        primitive.childPrimitives?.forEach((primitive) => {
          decomposePrimitive(primitive, editorRect, parentStyle)
          components.push(primitive)
        })
      } else {
        components.push(primitive)
      }
    })

    const groupPrimitive = new GroupPrimitive()
    groupPrimitive.childPrimitives = components
    groupPrimitive.style = { ...groupStyle.value }

    createGroupStyle(groupPrimitive)

    const deletePrimitives = childPrimitives.value as Primitive[]
    editorStore.batchDeletePrimitive(deletePrimitives)
    editorStore.addPrimitive(groupPrimitive)
    editorStore.setCurPrimitive(groupPrimitive)
    areaSelectStore.setAreaSelectVisible(false)
    areaSelectStore.clearPrimitives()
  }

  // 解除合并 primitive
  const handleDecompose = () => {
    const parentStyle = { ...curPrimitive.value?.style }
    const primitives = curPrimitive.value?.childPrimitives as Primitive[]
    const editor = document.querySelector('#editor')
    const editorRect = editor?.getBoundingClientRect() as DOMRect
    editorStore.deleteCurPrimitive()

    primitives.forEach((primitive) => {
      decomposePrimitive(primitive, editorRect, parentStyle)
      editorStore.addPrimitive(primitive)
    })
  }

  return {
    handleCompose,
    handleDecompose
  }
}
