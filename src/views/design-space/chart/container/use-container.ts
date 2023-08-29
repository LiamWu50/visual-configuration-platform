import { ceil } from 'lodash'

import { useEditorScale } from '@/hooks/use-editor-scale'
import { primitivesList } from '@/primitives/loader'
import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'
import { useEditorStore } from '@/store/editor/index'

export const useContainer = () => {
  const editorStore = useEditorStore()
  const { transByCurScale } = useEditorScale()

  // 拖动结束事件
  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const name = e.dataTransfer!.getData('name')
    const editorRef = document.querySelector('#editor')!
    const editorRefRec = editorRef.getBoundingClientRect()

    const primitive: Primitive = new primitivesList[name]()
    const style = {
      top: ceil(transByCurScale(e.clientY - editorRefRec.y)),
      left: ceil(transByCurScale(e.clientX - editorRefRec.x))
    } as PrimitiveStyle

    primitive.updateStyle(style)
    editorStore.addPrimitive(primitive)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.dataTransfer!.dropEffect = 'copy'
  }

  const handleMouseDown = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const handleMouseUp = () => {}

  return {
    handleDrop,
    handleDragOver,
    handleMouseDown,
    handleMouseUp
  }
}
