import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'
import { useAreaSelectStore } from '@/store/area-select/index'
import { getBoundBoxStyle, getStyle } from '@/utils/primitive'

import AreaSelect from './AreaSelect'
import AuxiliaryLine from './AuxiliaryLine/index'
import BoundBox from './BoundBox/index'
import ContextMenu from './ContextMenu/index'
import { useMouseEvent } from './hooks/use-mouse-event'
import styles from './index.module.scss'
import Scene from './Scene/index'
import SketchRuler from './SketchRuler/index'

export default defineComponent({
  name: 'Editor',
  setup() {
    const rulerVisible = ref(false)
    const areaSelectStore = useAreaSelectStore()
    const { areaSelectVisible } = storeToRefs(areaSelectStore)
    const styleFilterAttrs = ['width', 'height', 'top', 'left']

    const { groupState, editorScale, contextMenuRef, ...rest } = useMouseEvent()

    // 关闭右键菜单
    const handleCloseContextMenu = () => {
      contextMenuRef.value?.close()
    }

    // 编辑器样式
    const editorStyle = computed(() => ({
      transform: `scale(${editorScale.value / 100})`
    }))

    // 获取每个组件的样式
    const getPrimitiveStyle = (style: PrimitiveStyle) =>
      getStyle(style, styleFilterAttrs)

    nextTick(() => (rulerVisible.value = true))

    return {
      ...rest,
      groupState,
      editorStyle,
      rulerVisible,
      contextMenuRef,
      getPrimitiveStyle,
      areaSelectVisible,
      handleCloseContextMenu
    }
  },
  render() {
    const renderPrimitive = (item: Primitive) =>
      h(resolveComponent(item.cName), {
        id: `primitive${item.id}`,
        class: styles.primitive,
        style: this.getPrimitiveStyle(item.style),
        'data-context': item.cName,
        dataSource: item
      })

    const renderPrimitives = () =>
      this.primitives.map((item, index) => (
        <BoundBox
          index={index}
          style={getBoundBoxStyle(item.style)}
          primitive={item as Primitive}
          pStyle={item.style}
          onCloseContextmenu={this.handleCloseContextMenu}
        >
          {renderPrimitive(item as Primitive)}
        </BoundBox>
      ))

    return (
      <>
        <div
          id='screen'
          ref='screenRef'
          class={styles.screen}
          onWheel={this.handleMouseWheel}
          onScroll={this.handleMouseScroll}
        >
          <div
            id='editorContainer'
            ref='editorContaineRef'
            class={styles.container}
          >
            <div
              id='editor'
              ref='editorRef'
              data-context='Editor'
              class={styles.editor}
              style={this.editorStyle}
              onMousedown={this.handleMouseDown}
              onMouseup={this.handleMouseUp}
              onContextmenu={this.handleShowContextMenu}
            >
              <AreaSelect
                v-show={this.areaSelectVisible}
                options={this.groupState}
              />
              <AuxiliaryLine />
              <ContextMenu ref='contextMenuRef' />
              <Scene class={styles.scene} />
              {renderPrimitives()}
            </div>
          </div>
        </div>
        {this.rulerVisible ? <SketchRuler ref='sketchRulerRef' /> : null}
      </>
    )
  }
})
