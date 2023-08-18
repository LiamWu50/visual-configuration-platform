import GroupPrimitive from '@/primitives/components/group/primitive'
import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import { createGroupStyle, decomposePrimitive } from '@/utils/primitive'

export function useCompose() {
  const editorStore = useEditorStore()
  const areaSelectStore = useAreaSelectStore()
  const { curPrimitive } = storeToRefs(editorStore)
  const { groupStyle, selectedPrimitives } = storeToRefs(areaSelectStore)

  // 合并 primitive
  const handleCompose = () => {
    const allPrimitives: Primitive[] = []
    const primitives = selectedPrimitives.value as Primitive[]
    const editor = document.querySelector('#editor')
    const editorRect = editor!.getBoundingClientRect()

    primitives.forEach((primitive) => {
      // 如果要组合的组件中，已经存在组合数据，则需要提前拆分
      if (primitive.cName === 'Group') {
        const parentStyle = { ...primitive.style }

        primitive.childPrimitives?.forEach((primitive) => {
          decomposePrimitive(primitive, editorRect, parentStyle)
          allPrimitives.push(primitive)
        })
      } else {
        allPrimitives.push(primitive)
      }
    })

    // 实例化一个 groupPrimitive
    const deletePrimitives = selectedPrimitives.value as Primitive[]
    const groupPrimitive = new GroupPrimitive()
    groupPrimitive.childPrimitives = allPrimitives
    groupPrimitive.style = { ...groupStyle.value } as PrimitiveStyle

    createGroupStyle(groupPrimitive)

    editorStore.addPrimitive(groupPrimitive)
    editorStore.setCurPrimitive(groupPrimitive)
    editorStore.batchDeletePrimitive(deletePrimitives)
    areaSelectStore.setAreaSelectVisible(false)
    areaSelectStore.clearPrimitives()
  }

  // 解除合并 primitive
  const handleDecompose = () => {
    const parentStyle = { ...curPrimitive.value?.style } as PrimitiveStyle
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
