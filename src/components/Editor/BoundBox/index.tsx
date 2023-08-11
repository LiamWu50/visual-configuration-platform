// import { Component, Style } from '@/store/compose/types'
// import { useEditorStore } from '@/store/editor'
// import { useSnapshotStore } from '@/store/snapshot'
import { ceil } from 'lodash'
import { type PropType } from 'vue'

import { Primitive } from '@/primitives/primitive'
import { BoxStyle } from '@/primitives/types'
import { useEditorStore } from '@/store/editor/index'
import { mod360 } from '@/utils/translate'

import styles from './index.module.scss'
import { useBoundBox } from './use-boundbox'
// const components = ['VText', 'RectShape', 'CircleShape']
// const isPreventDrop = (component: string) => {
//   return !components.includes(component) && !component.startsWith('SVG')
// }

type CursorRes = {
  [key: string]: string
}

const props = {
  primitive: {
    type: Object as PropType<Primitive>,
    default: () => {}
  },
  pStyle: {
    type: Object as PropType<BoxStyle>,
    default: () => {}
  },
  index: {
    required: true,
    type: Number,
    default: 0
  }
}

export default defineComponent({
  name: 'BoundBox',
  props,
  emits: ['closeContextmenu'],
  setup(props, { slots, emit }) {
    const editorStore = useEditorStore()
    // const snapshotStore = useSnapshotStore()

    const { curPrimitive } = storeToRefs(editorStore)

    const { curRef, cursors, angleToCursor, drawPoints } = useBoundBox()

    // 位置点的样式
    const pointStyle = (pointStr: string) => {
      const { width = 0, height = 0 } = props.pStyle
      const hasT = pointStr.includes('t')
      const hasB = pointStr.includes('b')
      const hasL = pointStr.includes('l')
      const hasR = pointStr.includes('r')
      let newLeft = hasL ? 0 : width
      let newTop = hasT ? 0 : height

      if ((hasT || hasB) && !(hasL || hasR)) {
        newLeft = width / 2
        newTop = hasT ? 0 : height
      } else if (!(hasT || hasB) && (hasL || hasR)) {
        newLeft = hasL ? 0 : width
        newTop = Math.floor(height / 2)
      }

      return {
        marginLeft: '-4px',
        marginTop: '-4px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: cursors.value[pointStr]
      }
    }

    // 获取每个位置的光标的角度
    const getCursorStyle = () => {
      const result: CursorRes = {}
      let lastMatchIndex = -1

      for (const key in drawPoints) {
        const angle = mod360(drawPoints[key])

        for (let i = 0; i < angleToCursor.length; i++) {
          lastMatchIndex = (lastMatchIndex + 1) % angleToCursor.length
          const angleLimit = angleToCursor[lastMatchIndex]

          if (angle < 23 || angle >= 338) {
            result[key] = 'nw-resize'
            break
          }

          if (angleLimit.start <= angle && angle < angleLimit.end) {
            result[key] = angleLimit.cursor + '-resize'
            break
          }
        }
      }

      return result
    }

    /**
     * 鼠标按下primitive
     * @param e MouseEvent
     */
    const handleMouseDownEvent = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      // 将当前点击组件的事件传播出去，目前的消费是 VText 组件 https://github.com/woai3c/visual-drag-demo/issues/90
      // TODO
      // this.$nextTick(() => eventBus.$emit('componentClick'))

      // editorStore.setInEditorStatus(true)
      // if (isPreventDrop(props.dataSource.component)) {
      //   e.preventDefault()
      // }

      editorStore.setClickPrimitiveStatus(true)
      editorStore.setCurPrimitive(props.primitive)
      cursors.value = getCursorStyle()

      const style = props.pStyle
      const startY = e.clientY
      const startX = e.clientX
      const startTop = style.top || 0
      const startLeft = style.left || 0
      //鼠标移动事件 用来调整primitive的大小

      const mouseMoveEvent = (event: MouseEvent) => {
        const style: BoxStyle = {
          top: ceil(event.clientY - startY + startTop),
          left: ceil(event.clientX - startX + startLeft)
        }

        props.primitive.updateStyle(style)

        // 等更新完当前组件的样式并绘制到屏幕后再判断是否需要吸附
        // 如果不使用 $nextTick，吸附后将无法移动
        // TODO
        // this.$nextTick(() => {
        //   // 触发元素移动事件，用于显示标线、吸附功能
        //   // 后面两个参数代表鼠标移动方向
        //   // curY - startY > 0 true 表示向下移动 false 表示向上移动
        //   // curX - startX > 0 true 表示向右移动 false 表示向左移动
        // eventBus.$emit('move', curY - startY > 0, curX - startX > 0)
        // })
      }

      // 鼠标抬起事件
      const mouseUpEvent = () => {
        // TODO
        // 触发元素停止移动事件，用于隐藏标线
        // eventBus.$emit('unmove')
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)
      }

      document.addEventListener('mousemove', mouseMoveEvent)
      document.addEventListener('mouseup', mouseUpEvent)
    }

    /**
     * 调整包围盒和内部组件的大小
     * @param pType String
     * @param e MouseEvent
     */
    const handleAdjustSize = (pType: string, e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()

      const { pStyle } = props
      const { height = 0, width = 0, top = 0, left = 0 } = pStyle
      const startX = e.clientX
      const startY = e.clientY
      const mouseMoveEvent = (moveEvent: MouseEvent) => {
        const curX = moveEvent.clientX
        const curY = moveEvent.clientY
        const disY = curY - startY
        const disX = curX - startX
        const hasT = /t/.test(pType)
        const hasB = /b/.test(pType)
        const hasL = /l/.test(pType)
        const hasR = /r/.test(pType)
        const newHeight = height + (hasT ? -disY : hasB ? disY : 0)
        const newWidth = width + (hasL ? -disX : hasR ? disX : 0)
        Object.assign(pStyle, {
          height: Math.max(newHeight, 0),
          width: Math.max(newWidth, 0),
          left: left + (hasL ? disX : 0),
          top: top + (hasT ? disY : 0)
        })
      }
      const mouseUpEvent = () => {
        document.removeEventListener('mousemove', mouseMoveEvent)
        document.removeEventListener('mouseup', mouseUpEvent)
      }
      document.addEventListener('mousemove', mouseMoveEvent)
      document.addEventListener('mouseup', mouseUpEvent)
    }

    onMounted(() => {
      // 用于 Group 组件
      if (curPrimitive.value) {
        cursors.value = getCursorStyle() // 根据旋转角度获取光标位置
      }
    })

    /**
     * 点击当前包围盒
     */
    const handleClickBoundBox = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      emit('closeContextmenu')
      // editorStore.hideContextMenu()
    }

    /**
     * 当前组件是否选中
     */
    const isSelected = computed(
      () => curPrimitive.value?.id === props.primitive.id
    )

    const renderDrawPoints = () =>
      Object.keys(drawPoints).map((key: string) => (
        <div
          key={key}
          class={styles.point}
          style={pointStyle(key as string)}
          onMousedown={(e) => handleAdjustSize(key as string, e)}
        ></div>
      ))

    return () => (
      <div
        ref={curRef}
        class={[styles.boundBox, isSelected.value && styles.active]}
        onClick={handleClickBoundBox}
        onMousedown={handleMouseDownEvent}
      >
        {isSelected.value ? renderDrawPoints() : null}
        {slots.default?.()}
      </div>
    )
  }
})
