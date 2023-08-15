import { ceil } from 'lodash'

import { primitivesList } from '@/primitives/loader'
import { BoxStyle } from '@/primitives/types'
import { useEditorStore } from '@/store/editor/index'

export const useContainer = () => {
  const editorStore = useEditorStore()

  /**
   * 拖动结束事件
   * @param e DragEvent
   */
  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const name = e.dataTransfer!.getData('name')
    const editorRef = document.querySelector('#editor')!
    const editorRefRec = editorRef.getBoundingClientRect()
    const primitive = new primitivesList[name]()
    const style: BoxStyle = {
      top: ceil(e.clientY - editorRefRec.y),
      left: ceil(e.clientX - editorRefRec.x)
    }

    primitive.updateStyle(style)
    editorStore.addPrimitive(primitive)

    // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
    //   changeComponentSizeWithScale(component)

    //   this.$store.commit('recordSnapshot')
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
