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
import PixelGrid from './PixelGrid/index'
import SketchRuler from './SketchRuler/index'

export default defineComponent({
  name: 'Editor',
  components: { PixelGrid, SketchRuler, AreaSelect, ContextMenu },
  setup() {
    const screenRef = ref<HTMLDivElement | null>(null)
    const editorContaineRef = ref<HTMLDivElement | null>(null)
    const contextMenuRef = ref<typeof ContextMenu | null>(null)

    const areaSelectStore = useAreaSelectStore()
    const { areaSelectVisible } = storeToRefs(areaSelectStore)
    const styleFilterAttrs = ['width', 'height', 'top', 'left']

    const { groupState, editorScale, ...rest } = useMouseEvent()

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

    onMounted(() => {
      // 设计区域滚动居中
      const containerRect = editorContaineRef.value!.getBoundingClientRect()
      screenRef.value!.scrollLeft = containerRect.width / 2 - 100
      screenRef.value!.scrollTop = containerRect.height / 2 - 160
    })

    return {
      ...rest,
      screenRef,
      groupState,
      editorStyle,
      contextMenuRef,
      editorContaineRef,
      getPrimitiveStyle,
      areaSelectVisible,
      handleCloseContextMenu
    }
  },
  render() {
    const renderPrimitives = () =>
      this.primitives.map((item, index) => (
        <BoundBox
          index={index}
          style={getBoundBoxStyle(item.style)}
          primitive={item as Primitive}
          pStyle={item.style}
          onCloseContextmenu={this.handleCloseContextMenu}
        >
          {h(resolveComponent(item.cName), {
            id: `primitive${item.id}`,
            class: styles.primitive,
            style: this.getPrimitiveStyle(item.style),
            'data-context': item.cName,
            dataSource: item
          })}
        </BoundBox>
      ))

    return (
      <>
        <SketchRuler ref='sketchRulerRef' />
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
              {/* <PixelGrid /> */}
              <ContextMenu ref='contextMenuRef' />
              {renderPrimitives()}
            </div>
          </div>
        </div>
      </>
    )
  }
})
