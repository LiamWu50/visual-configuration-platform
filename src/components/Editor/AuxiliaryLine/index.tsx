// 导入类型和工具函数
import type { DOMRectStyle, Location } from '@/primitives/types'
import { useEditorStore } from '@/store/editor'
import eventEmitter from '@/utils/event-emitter'
import { calcPrimitiveAxis } from '@/utils/primitive'

import styles from './index.module.scss'

// 定义一些类型和常量
export type StyleObject = {
  [key: string]: any
}

interface LineStatus {
  [key: string]: boolean
}

type Condition = Record<
  'isNearly' | 'lineNode' | 'line' | 'dragShift' | 'lineShift',
  any
>

type RecordWithAnyKey<T> = {
  [key: string]: T
}

export default defineComponent({
  name: 'AuxiliaryLine',
  setup() {
    const editorStore = useEditorStore()
    const lineElementsRef: Ref<(HTMLElement | null)[]> = ref([])
    const LINE_NAMES = ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']
    const NEAR_THRESHOLD = ref<number>(3)
    const lineStatus = reactive<LineStatus>({
      xt: false,
      xc: false,
      xb: false,
      yl: false,
      yc: false,
      yr: false
    })

    const setLineElementRef = (element: any) => {
      lineElementsRef.value.push(element)
    }

    // 隐藏辅助线
    const hideLines = () => {
      Object.keys(lineStatus).forEach((line) => {
        lineStatus[line] = false
      })
    }

    const showLines = (isDownward: boolean, isRightward: boolean) => {
      const { primitives } = editorStore
      const currentPrimitive = editorStore.curPrimitive
      if (!currentPrimitive) return

      const {
        top: theTop,
        left: theLeft,
        right: theRight,
        bottom: theBottom
      }: Location = calcPrimitiveAxis(currentPrimitive.style as DOMRectStyle)

      const currentPrimitiveHalfWidth = (theRight - theLeft) / 2
      const currentPrimitiveHalfHeight = (theBottom - theTop) / 2

      hideLines()
      primitives.forEach((primitive) => {
        if (primitive == currentPrimitive) return

        const primitiveStyle = calcPrimitiveAxis(
          primitive.style as DOMRectStyle
        )
        const { top, left, bottom, right } = primitiveStyle
        const primitiveHalfWidth = (right - left!) / 2
        const primitiveHalfHeight = (bottom - top!) / 2

        const conditions: RecordWithAnyKey<Condition[]> = {
          top: [
            {
              isNearly: isNearly(theTop, top),
              lineNode: lineElementsRef.value[0], // xt
              line: 'xt',
              dragShift: top,
              lineShift: top
            },
            {
              isNearly: isNearly(theBottom, top),
              lineNode: lineElementsRef.value[0], // xt
              line: 'xt',
              dragShift: top - (theBottom - theTop || 0),
              lineShift: top
            },
            {
              // 组件与拖拽节点的中间是否对齐
              isNearly: isNearly(
                (theTop || 0) + currentPrimitiveHalfHeight,
                top + primitiveHalfHeight
              ),
              lineNode: lineElementsRef.value[1], // xc
              line: 'xc',
              dragShift: top + primitiveHalfHeight - currentPrimitiveHalfHeight,
              lineShift: top + primitiveHalfHeight
            },
            {
              isNearly: isNearly(theTop, bottom),
              lineNode: lineElementsRef.value[2], // xb
              line: 'xb',
              dragShift: bottom,
              lineShift: bottom
            },
            {
              isNearly: isNearly(theBottom, bottom),
              lineNode: lineElementsRef.value[2], // xb
              line: 'xb',
              dragShift: bottom - (theBottom - theTop || 0),
              lineShift: bottom
            }
          ],
          left: [
            {
              isNearly: isNearly(theLeft, left),
              lineNode: lineElementsRef.value[3], // yl
              line: 'yl',
              dragShift: left,
              lineShift: left
            },
            {
              isNearly: isNearly(theRight, left),
              lineNode: lineElementsRef.value[3], // yl
              line: 'yl',
              dragShift: left - (theRight - theLeft || 0),
              lineShift: left
            },
            {
              // 组件与拖拽节点的中间是否对齐
              isNearly: isNearly(
                (theLeft || 0) + currentPrimitiveHalfWidth,
                left + primitiveHalfWidth
              ),
              lineNode: lineElementsRef.value[4], // yc
              line: 'yc',
              dragShift: left + primitiveHalfWidth - currentPrimitiveHalfWidth,
              lineShift: left + primitiveHalfWidth
            },
            {
              isNearly: isNearly(theLeft, right),
              lineNode: lineElementsRef.value[5], // yr
              line: 'yr',
              dragShift: right,
              lineShift: right
            },
            {
              isNearly: isNearly(theRight, right),
              lineNode: lineElementsRef.value[5], // yr
              line: 'yr',
              dragShift: right - (theRight - theLeft || 0),
              lineShift: right
            }
          ]
        }

        const needToShow: string[] = []

        Object.keys(conditions).forEach((key) => {
          // 遍历符合的条件并处理
          conditions[key].forEach((condition: Condition) => {
            if (!condition.isNearly) return
            // 修改当前组件位移
            currentPrimitive.updateStyleByKey(key, condition.dragShift)
            condition.lineNode.style[key] = `${condition.lineShift}px`
            needToShow.push(condition.line)
          })
        })

        // 同一方向上同时显示一条线可能不太美观，因此采取选择逻辑
        chooseTheTrueLine(needToShow, isDownward, isRightward)
      })
    }

    const chooseTheTrueLine = (
      needToShow: string[],
      isDownward: boolean,
      isRightward: boolean
    ) => {
      // 根据鼠标移动方向决定显示哪条线
      if (isRightward) {
        if (needToShow.includes('yr')) {
          lineStatus.yr = true
        } else if (needToShow.includes('yc')) {
          lineStatus.yc = true
        } else if (needToShow.includes('yl')) {
          lineStatus.yl = true
        }
      } else {
        if (needToShow.includes('yl')) {
          lineStatus.yl = true
        } else if (needToShow.includes('yc')) {
          lineStatus.yc = true
        } else if (needToShow.includes('yr')) {
          lineStatus.yr = true
        }
      }

      if (isDownward) {
        if (needToShow.includes('xb')) {
          lineStatus.xb = true
        } else if (needToShow.includes('xc')) {
          lineStatus.xc = true
        } else if (needToShow.includes('xt')) {
          lineStatus.xt = true
        }
      } else {
        if (needToShow.includes('xt')) {
          lineStatus.xt = true
        } else if (needToShow.includes('xc')) {
          lineStatus.xc = true
        } else if (needToShow.includes('xb')) {
          lineStatus.xb = true
        }
      }
    }

    const isNearly = (dragValue: number, targetValue: number) =>
      Math.abs(dragValue - targetValue) <= NEAR_THRESHOLD.value

    watchEffect(() => {
      // 监听事件
      eventEmitter.on('move', ({ isDownward, isRightward }: any) => {
        showLines(isDownward, isRightward)
      })
      eventEmitter.on('unmove', () => {
        hideLines()
      })
      showLines(false, false)
    })

    return () => (
      // 渲染线条
      <div class={styles.markLine}>
        {LINE_NAMES.map((lineName) => (
          <div
            key={lineName}
            v-show={lineStatus[lineName]}
            ref={setLineElementRef}
            class={`${styles.line} ${
              lineName.includes('x') ? styles.xline : styles.yline
            }`}
          ></div>
        ))}
      </div>
    )
  }
})
