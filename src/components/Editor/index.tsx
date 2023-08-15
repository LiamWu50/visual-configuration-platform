import { Primitive } from '@/primitives/primitive'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'

import AreaSelect from './AreaSelect'
import AuxiliaryLine from './AuxiliaryLine/index'
import BoundBox from './BoundBox/index'
import ContextMenu from './ContextMenu/index'
import Grid from './Grid/index'
import { useGroup } from './hooks/use-group'
import { useStyles } from './hooks/use-styles'
import styles from './index.module.scss'

export const auxiliaryLineKey = 'AUXILIARY_LINE_KEY'

export default defineComponent({
  name: 'Editor',
  components: { Grid, AreaSelect, ContextMenu },
  setup() {
    const editorStore = useEditorStore()
    const areaSelectStore = useAreaSelectStore()
    const { areaSelectVisible } = storeToRefs(areaSelectStore)
    const { groupState, onDrawGroupBoundry } = useGroup()

    const primitives = editorStore.primitives
    const { curPrimitive } = storeToRefs(editorStore)

    const contextMenuRef = ref<typeof ContextMenu | null>(null)

    const auxiliaryLineRef = ref<InstanceType<typeof AuxiliaryLine> | null>(
      null
    )
    provide(auxiliaryLineKey, auxiliaryLineRef)

    /**
     * 按下鼠标左键事件
     * @param e MouseEvent
     */
    const handleMouseDown = (e: MouseEvent) => {
      // 如果不是鼠标左键触发的就取消
      if (e.button !== 0) return

      editorStore.setClickPrimitiveStatus(false)
      if (!curPrimitive) e.preventDefault()
      onDrawGroupBoundry(e)
    }

    /**
     * 取消当前选中的primitive
     */
    const deselectCurPrimitive = (e: MouseEvent) => {
      if (!editorStore.isClickPrimitive) editorStore.setCurPrimitive(null)

      // 如果不是右键的话就把右键菜单关闭
      if (e.button !== 2) contextMenuRef.value?.close()
    }

    /**
     * 获取当前鼠标右键点击的节点是画布、普通 primitive 还是 groupPrimitive
     * @param node Element
     * @returns String
     */
    const getContextElementType = (element: Element): string | undefined => {
      if (!element || !element.parentNode) return
      const parentNode = element.parentNode as Element
      if (!parentNode.getAttribute) return
      const dataType = parentNode.getAttribute('data-context')
      if (dataType) return dataType
      return getContextElementType(parentNode)
    }

    /**
     * 开启右键菜单
     * @param e MouseEvent
     */
    const handleShowContextMenu = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (!e.target) return

      // 计算菜单相对于编辑器的位移
      let target = e.target as HTMLElement
      let top = e.offsetY
      let left = e.offsetX

      while (target instanceof SVGElement) {
        target = target.parentNode as HTMLElement
      }

      while (target.id !== 'editor') {
        left += target.offsetLeft
        top += target.offsetTop
        target = target.parentNode as HTMLElement
      }

      const contextType = getContextElementType(e.target as Element)

      contextMenuRef.value?.show({ top, left, contextType })
    }

    /**
     * 关闭右键菜单
     */
    const handleCloseContextMenu = () => {
      contextMenuRef.value?.close()
    }

    const { getBoundBoxStyle } = useStyles()

    const renderPrimitives = () =>
      primitives.map((item, index) => (
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
            'data-context': item.cName,
            dataSource: item
          })}
        </BoundBox>
      ))

    return () => (
      <div
        id='editor'
        data-context='Editor'
        class={styles.editor}
        onMousedown={handleMouseDown}
        onMouseup={deselectCurPrimitive}
        onContextmenu={handleShowContextMenu}
      >
        <Grid />
        <AreaSelect v-show={areaSelectVisible.value} options={groupState} />
        <AuxiliaryLine />
        <ContextMenu ref={contextMenuRef} />
        {renderPrimitives()}
      </div>
    )
  }
})
