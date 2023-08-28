import { useEditorStore } from '@/store/editor/index'

import ContextMenu from '../ContextMenu/index'
import SketchRuler from '../SketchRuler/index'
import { useGroup } from './use-group'

export function useMouseEvent() {
  const state = reactive({
    lastX: 0, // 上一次鼠标横向位置
    lastY: 0, // 上一次鼠标纵向位置
    isSpaceDown: ref(false), // 键盘Space键是否按下
    isMouseDown: ref(false) // 鼠标左键是否按下
  })

  const screenRef = ref<HTMLDivElement | null>(null)
  const editorRef = ref<HTMLDivElement | null>(null)
  const contextMenuRef = ref<typeof ContextMenu | null>(null)
  const sketchRulerRef = ref<typeof SketchRuler | null>(null)
  const editorContaineRef = ref<HTMLElement | null>(null)

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

      sketchRulerRef.value?.handleResizeRuler()
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
    state.isMouseDown = true

    // 如果当前按下了键盘的 Space 键就执行拖动画布的操作
    if (state.isSpaceDown) {
      state.lastX = e.clientX
      state.lastY = e.clientY
    } else {
      editorStore.setClickPrimitiveStatus(false)
      if (!curPrimitive) e.preventDefault()
      onDrawGroupBoundry(e)
    }
  }

  // 取消当前选中的primitive
  const handleMouseUp = (e: MouseEvent) => {
    if (!editorStore.isClickPrimitive) editorStore.setCurPrimitive(null)
    // 如果不是右键的话就把右键菜单关闭
    if (e.button !== 2) contextMenuRef.value?.close()
    state.isMouseDown = false
  }

  const mouseMoveEvent = (e: MouseEvent) => {
    if (!state.isMouseDown) return
    const deltaX = e.clientX - state.lastX
    const deltaY = e.clientY - state.lastY
    screenRef.value?.scrollBy(-deltaX, -deltaY)
    state.lastX = e.clientX
    state.lastY = e.clientY
  }

  // 处理键盘事件
  const { space } = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.code === 'Space' && e.type === 'keydown') {
        e.preventDefault()
      }
    }
  })

  watch(space, (v) => {
    state.isSpaceDown = v
    editorRef.value!.style.cursor = v ? 'pointer' : 'default'
    if (v) {
      document.addEventListener('mousemove', mouseMoveEvent)
    } else {
      document.removeEventListener('mousemove', mouseMoveEvent)
    }
  })

  onMounted(() => {
    // 设计区域滚动居中
    const containerRect = editorContaineRef.value!.getBoundingClientRect()
    screenRef.value!.scrollLeft = containerRect.width / 2 - 100
    screenRef.value!.scrollTop = containerRect.height / 2 - 160
  })

  return {
    groupState,
    editorScale,
    primitives,
    screenRef,
    editorRef,
    contextMenuRef,
    sketchRulerRef,
    editorContaineRef,
    handleMouseUp,
    handleMouseDown,
    handleMouseWheel,
    handleMouseScroll,
    handleShowContextMenu
  }
}
