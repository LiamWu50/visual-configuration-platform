import { ceil } from 'lodash'
import { type PropType } from 'vue'

import { useEditorScale } from '@/hooks/use-editor-scale'
import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import eventEmitter from '@/utils/event-emitter'
import { mod360 } from '@/utils/translate'

import styles from './index.module.scss'
import { useBoundBox } from './use-boundbox'

type CursorRes = {
  [key: string]: string
}

const props = {
  primitive: {
    type: Object as PropType<Primitive>,
    default: () => {}
  },
  pStyle: {
    type: Object as PropType<PrimitiveStyle>,
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
    const areaSelectStore = useAreaSelectStore()

    const { curPrimitive } = storeToRefs(editorStore)
    const { areaSelectVisible } = storeToRefs(areaSelectStore)
    const { transByCurScale } = useEditorScale()

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

      // 如果当前是在组合的模式下，就取消该方法
      if (areaSelectVisible.value) return

      editorStore.setClickPrimitiveStatus(true)
      editorStore.setCurPrimitive(props.primitive)
      cursors.value = getCursorStyle()

      const style = props.pStyle
      const startY = e.clientY
      const startX = e.clientX
      const startTop = style.top || 0
      const startLeft = style.left || 0
      //鼠标移动事件 用来调整primitive的位置

      const mouseMoveEvent = (event: MouseEvent) => {
        const curX = event.clientX
        const curY = event.clientY
        const top = transByCurScale(event.clientY - startY) + startTop
        const left = transByCurScale(event.clientX - startX) + startLeft

        const style = {
          top: ceil(top),
          left: ceil(left)
        } as PrimitiveStyle

        props.primitive.updateStyle(style)

        const isDownward = curY - startY > 0
        const isRightward = curX - startX > 0
        eventEmitter.emit('move', { isDownward, isRightward })
      }

      // 鼠标抬起事件
      const mouseUpEvent = () => {
        // 触发元素停止移动事件，用于隐藏标线
        eventEmitter.emit('unmove')
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
        const newHeight =
          height + transByCurScale(hasT ? -disY : hasB ? disY : 0)
        const newWidth = width + transByCurScale(hasL ? -disX : hasR ? disX : 0)
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
        cursors.value = getCursorStyle()
      }
    })

    /**
     * 点击当前包围盒
     */
    const handleClickBoundBox = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      emit('closeContextmenu')
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
