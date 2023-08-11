import { Ref } from 'vue'

import type { DOMRectStyle, Location } from '@/primitives/types'
import { useEditorStore } from '@/store/editor'
import eventEmitter from '@/utils/event-emitter'
import { calcPrimitiveAxis } from '@/utils/primitive'

import styles from './index.module.scss'

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
    const linesRef: Ref<(HTMLElement | null)[]> = ref([])
    const lines = ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']
    const diff = ref<number>(3)
    const lineStatus = reactive<LineStatus>({
      xt: false,
      xc: false,
      xb: false,
      yl: false,
      yc: false,
      yr: false
    })

    const setLineRef = (el: any) => {
      linesRef.value.push(el)
    }

    onMounted(() => {
      eventEmitter.on('move', ({ isDownward, isRightward }: any) => {
        showLine(isDownward, isRightward)
      })
      eventEmitter.on('unmove', () => {
        hideLine()
      })
      showLine(false, false)
    })

    const hideLine = () => {
      Object.keys(lineStatus).forEach((line) => {
        lineStatus[line] = false
      })
    }

    const showLine = (isDownward: boolean, isRightward: boolean) => {
      const { primitives } = editorStore
      const curPrimitive = editorStore.curPrimitive
      if (!curPrimitive) return

      const {
        top: mytop,
        left: myleft,
        right: myright,
        bottom: mybottom
      }: Location = calcPrimitiveAxis(curPrimitive.style as DOMRectStyle)

      const curPrimitiveHalfwidth = (myright - myleft) / 2
      const curPrimitiveHalfHeight = (mybottom - mytop) / 2

      hideLine()
      primitives.forEach((primitive) => {
        if (primitive == curPrimitive) return

        const primitiveStyle = calcPrimitiveAxis(
          primitive.style as DOMRectStyle
        )
        const { top, left, bottom, right } = primitiveStyle
        const primitiveHalfwidth = (right - left!) / 2
        const primitiveHalfHeight = (bottom - top!) / 2

        const conditions: RecordWithAnyKey<Condition[]> = {
          top: [
            {
              isNearly: isNearly(mytop, top),
              lineNode: linesRef.value[0], // xt
              line: 'xt',
              dragShift: top,
              lineShift: top
            },
            {
              isNearly: isNearly(mybottom, top),
              lineNode: linesRef.value[0], // xt
              line: 'xt',
              dragShift: top - (mybottom - mytop || 0),
              lineShift: top
            },
            {
              // 组件与拖拽节点的中间是否对齐
              isNearly: isNearly(
                (mytop || 0) + curPrimitiveHalfHeight,
                top + primitiveHalfHeight
              ),
              lineNode: linesRef.value[1], // xc
              line: 'xc',
              dragShift: top + primitiveHalfHeight - curPrimitiveHalfHeight,
              lineShift: top + primitiveHalfHeight
            },
            {
              isNearly: isNearly(mytop, bottom),
              lineNode: linesRef.value[2], // xb
              line: 'xb',
              dragShift: bottom,
              lineShift: bottom
            },
            {
              isNearly: isNearly(mybottom, bottom),
              lineNode: linesRef.value[2], // xb
              line: 'xb',
              dragShift: bottom - (mybottom - mytop || 0),
              lineShift: bottom
            }
          ],
          left: [
            {
              isNearly: isNearly(myleft, left),
              lineNode: linesRef.value[3], // yl
              line: 'yl',
              dragShift: left,
              lineShift: left
            },
            {
              isNearly: isNearly(myright, left),
              lineNode: linesRef.value[3], // yl
              line: 'yl',
              dragShift: left - (myright - myleft || 0),
              lineShift: left
            },
            {
              // 组件与拖拽节点的中间是否对齐
              isNearly: isNearly(
                (myleft || 0) + curPrimitiveHalfwidth,
                left + primitiveHalfwidth
              ),
              lineNode: linesRef.value[4], // yc
              line: 'yc',
              dragShift: left + primitiveHalfwidth - curPrimitiveHalfwidth,
              lineShift: left + primitiveHalfwidth
            },
            {
              isNearly: isNearly(myleft, right),
              lineNode: linesRef.value[5], // yr
              line: 'yr',
              dragShift: right,
              lineShift: right
            },
            {
              isNearly: isNearly(myright, right),
              lineNode: linesRef.value[5], // yr
              line: 'yr',
              dragShift: right - (myright - myleft || 0),
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
            curPrimitive.updateStyleByKey(key, condition.dragShift)
            condition.lineNode.style[key] = `${condition.lineShift}px`
            needToShow.push(condition.line)
          })
        })

        // 同一方向上同时显示三条线可能不太美观，因此才有了这个解决方案
        // 同一方向上的线只显示一条，例如多条横条只显示一条横线
        if (needToShow.length) {
          chooseTheTureLine(needToShow, isDownward, isRightward)
        }
      })
    }

    const chooseTheTureLine = (
      needToShow: string[],
      isDownward: boolean,
      isRightward: boolean
    ) => {
      // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
      // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
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
      Math.abs(dragValue - targetValue) <= diff.value

    return () => (
      <div class={styles.markLine}>
        {lines.map((l) => (
          <div
            key={l}
            v-show={lineStatus[l]}
            ref={setLineRef}
            class={`${styles.line} ${
              l.includes('x') ? styles.xline : styles.yline
            }`}
          ></div>
        ))}
      </div>
    )
  }
})
