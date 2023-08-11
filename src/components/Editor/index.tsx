import { useEditorStore } from '@/store/editor/index'

import AuxiliaryLine from './AuxiliaryLine/index'
import BoundBox from './BoundBox/index'
import ContextMenu from './ContextMenu/index'
import Grid from './Grid/index'
import styles from './index.module.scss'
import { useStyles } from './use-styles'

export const auxiliaryLineKey = 'AUXILIARY_LINE_KEY'

export default defineComponent({
  name: 'Editor',
  components: { Grid, ContextMenu },
  setup() {
    const editorStore = useEditorStore()
    const primitives = editorStore.primitives

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
      editorStore.setClickPrimitiveStatus(false)
      // e.preventDefault()
      // e.stopPropagation()
    }

    /**
     * 取消当前选中的primitive
     */
    const deselectCurPrimitive = (e: MouseEvent) => {
      if (!editorStore.isClickPrimitive) editorStore.setCurPrimitive(null)

      // 如果不是右键的话就把右键菜单关闭
      if (e.button != 2) contextMenuRef.value?.close()
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

      contextMenuRef.value?.show({ top, left })
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
          primitive={item}
          pStyle={item.style}
          onCloseContextmenu={handleCloseContextMenu}
        >
          {h(resolveComponent(item.cName), {
            id: 'primitive' + item.id,
            class: styles.primitive,
            dataSource: item
          })}
        </BoundBox>
      ))

    return () => (
      <div
        id='editor'
        class={styles.editor}
        onMousedown={handleMouseDown}
        onMouseup={deselectCurPrimitive}
        onContextmenu={handleShowContextMenu}
      >
        <Grid />
        <AuxiliaryLine />
        <ContextMenu ref={contextMenuRef} />
        {renderPrimitives()}
      </div>
    )
  }
})
