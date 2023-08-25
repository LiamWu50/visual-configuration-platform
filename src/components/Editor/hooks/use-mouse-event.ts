import { useEditorStore } from '@/store/editor/index'

import ContextMenu from '../ContextMenu/index'
import SketchRuler from '../SketchRuler/index'
import { useGroup } from './use-group'

export function useMouseEvent() {
  const contextMenuRef = ref<typeof ContextMenu | null>(null)
  const sketchRulerRef = ref<typeof SketchRuler | null>(null)

  const { groupState, onDrawGroupBoundry } = useGroup()
  const editorStore = useEditorStore()
  const { curPrimitive, primitives, editorScale } = storeToRefs(editorStore)

  // 页面滚动事件
  const handleMouseScroll = () => {
    sketchRulerRef.value?.handleResizeRuler()
  }

  // 鼠标滚轮事件
  const handleMouseWheel = (e: any) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      sketchRulerRef.value?.handleResizeRuler()

      let scaleValue = editorScale.value

      if (e.wheelDelta >= 0 && scaleValue < 200) {
        scaleValue = scaleValue + 5
        editorStore.setEditorScale(scaleValue)
        return
      }

      if (e.wheelDelta < 0 && scaleValue > 10) {
        scaleValue = scaleValue - 5
        editorStore.setEditorScale(scaleValue)
      }
    }
  }

  // 开启右键菜单
  const handleShowContextMenu = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (!e.target) return

    const top = e.clientY
    const left = e.clientX
    const contextType = getContextElementType(e.target as Element)
    contextMenuRef.value?.show({ top, left, contextType })
  }

  // 获取当前鼠标右键点击的节点是画布、普通 primitive 还是 groupPrimitive
  const getContextElementType = (element: Element): string | undefined => {
    if (!element || !element.parentNode) return
    const parentNode = element.parentNode as Element
    if (!parentNode.getAttribute) return
    const dataType = parentNode.getAttribute('data-context')
    if (dataType) return dataType
    return getContextElementType(parentNode)
  }

  // 按下鼠标左键事件
  const handleMouseDown = (e: MouseEvent) => {
    // 如果不是鼠标左键触发的就取消
    if (e.button !== 0) return

    editorStore.setClickPrimitiveStatus(false)
    if (!curPrimitive) e.preventDefault()
    onDrawGroupBoundry(e)
  }

  // 取消当前选中的primitive
  const handleMouseUp = (e: MouseEvent) => {
    if (!editorStore.isClickPrimitive) editorStore.setCurPrimitive(null)

    // 如果不是右键的话就把右键菜单关闭
    if (e.button !== 2) contextMenuRef.value?.close()
  }

  return {
    groupState,
    editorScale,
    primitives,
    contextMenuRef,
    sketchRulerRef,
    handleMouseUp,
    handleMouseDown,
    handleMouseWheel,
    handleMouseScroll,
    handleShowContextMenu
  }
}
