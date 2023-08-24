import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import { getBoundBoxStyle, getStyle } from '@/utils/primitive'

import AreaSelect from './AreaSelect'
import AuxiliaryLine from './AuxiliaryLine/index'
import BoundBox from './BoundBox/index'
import ContextMenu from './ContextMenu/index'
import { useGroup } from './hooks/use-group'
import styles from './index.module.scss'
import PixelGrid from './PixelGrid/index'
import SketchRuler from './SketchRuler/index'

export const auxiliaryLineKey = 'AUXILIARY_LINE_KEY'

export default defineComponent({
  name: 'Editor',
  components: { PixelGrid, SketchRuler, AreaSelect, ContextMenu },
  setup() {
    const sketchRulerRef = ref<typeof SketchRuler | null>(null)
    const editorStore = useEditorStore()
    const areaSelectStore = useAreaSelectStore()
    const { areaSelectVisible } = storeToRefs(areaSelectStore)
    const { groupState, onDrawGroupBoundry } = useGroup()
    const { curPrimitive, primitives, editorScale } = storeToRefs(editorStore)
    const contextMenuRef = ref<typeof ContextMenu | null>(null)
    const styleFilterAttrs = ['width', 'height', 'top', 'left']

    // 按下鼠标左键事件
    const handleMouseDown = (e: MouseEvent) => {
      // 如果不是鼠标左键触发的就取消
      if (e.button !== 0) return

      editorStore.setClickPrimitiveStatus(false)
      if (!curPrimitive) e.preventDefault()
      onDrawGroupBoundry(e)
    }

    // 取消当前选中的primitive
    const deselectCurPrimitive = (e: MouseEvent) => {
      if (!editorStore.isClickPrimitive) editorStore.setCurPrimitive(null)

      // 如果不是右键的话就把右键菜单关闭
      if (e.button !== 2) contextMenuRef.value?.close()
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

    // 关闭右键菜单
    const handleCloseContextMenu = () => {
      contextMenuRef.value?.close()
    }

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

    // 编辑器样式
    const editorStyle = computed(() => ({
      transform: `scale(${editorScale.value / 100})`
    }))

    const getPrimitiveStyle = (style: PrimitiveStyle) =>
      getStyle(style, styleFilterAttrs)

    const renderPrimitives = () =>
      primitives.value.map((item, index) => (
        <BoundBox
          index={index}
          style={getBoundBoxStyle(item.style)}
          primitive={item as Primitive}
          pStyle={item.style}
          onCloseContextmenu={handleCloseContextMenu}
        >
          {h(resolveComponent(item.cName), {
            id: `primitive${item.id}`,
            class: styles.primitive,
            style: getPrimitiveStyle(item.style),
            'data-context': item.cName,
            dataSource: item
          })}
        </BoundBox>
      ))

    return () => (
      <>
        <SketchRuler ref={sketchRulerRef} />
        <div
          id='screen'
          class={styles.screen}
          onWheel={handleMouseWheel}
          onScroll={handleMouseScroll}
        >
          <div id='editorContainer' class={styles.container}>
            <div
              id='editor'
              data-context='Editor'
              class={styles.editor}
              style={editorStyle.value}
              onMousedown={handleMouseDown}
              onMouseup={deselectCurPrimitive}
              onContextmenu={handleShowContextMenu}
            >
              <AreaSelect
                v-show={areaSelectVisible.value}
                options={groupState}
              />
              <AuxiliaryLine />
              {/* <PixelGrid /> */}
              <ContextMenu ref={contextMenuRef} />
              {renderPrimitives()}
            </div>
          </div>
        </div>
      </>
    )
  }
})
