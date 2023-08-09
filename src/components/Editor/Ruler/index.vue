<script lang="ts">
  import { Ref } from 'vue'

  import { Component } from '@/store/compose/types'
  import { CompStyle, Style } from '@/store/compose/types'
  import { useEditorStore } from '@/store/editor'
  // import eventBus from '@/utils/eventBus'

  export type StyleObject = Style & {
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
    name: 'Ruler',
    setup() {
      const editorStore = useEditorStore()
      // const composeStore = useComposeStore()

      const linesRef = ref<Array<any>>([])

      const lines = reactive<string[]>(['xt', 'xc', 'xb', 'yl', 'yc', 'yr'])
      const diff = ref<number>(3)
      const lineStatus = reactive<LineStatus>({
        xt: false,
        xc: false,
        xb: false,
        yl: false,
        yc: false,
        yr: false
      })

      const setLineRef = (el: Ref<HTMLElement>) => {
        linesRef.value.push(el)
      }

      onMounted(() => {
        // 监听元素移动和不移动的事件
        // eventBus.$on('move', (isDownward, isRightward) => {
        //   showLine(isDownward, isRightward)
        // })
        // eventBus.$on('unmove', () => {
        //   hideLine()
        // })
        showLine(false, false)
      })

      const hideLine = () => {
        Object.keys(lineStatus).forEach((line) => {
          lineStatus[line] = false
        })
      }

      const showLine = (isDownward: boolean, isRightward: boolean) => {
        // const lines = this.$refs
        const { componentData } = editorStore
        const curComponent = editorStore.curComponent as Component

        const curComponentStyle = curComponent?.style as Style

        const curComponentHalfwidth = curComponentStyle?.width / 2
        const curComponentHalfHeight = curComponentStyle?.height / 2

        hideLine()
        componentData.forEach((component) => {
          if (component == curComponent) return
          const componentStyle = component.style as Style

          const { top, left, bottom, right } = componentStyle
          const componentHalfwidth = componentStyle.width / 2
          const componentHalfHeight = componentStyle.height / 2

          const conditions: RecordWithAnyKey<Condition[]> = {
            top: [
              {
                isNearly: isNearly(curComponentStyle.top, top),
                lineNode: linesRef.value[0], // xt
                line: 'xt',
                dragShift: top,
                lineShift: top
              },
              {
                isNearly: isNearly(curComponentStyle.bottom, top),
                lineNode: linesRef.value[0], // xt
                line: 'xt',
                dragShift: top - curComponentStyle.height,
                lineShift: top
              },
              {
                // 组件与拖拽节点的中间是否对齐
                isNearly: isNearly(
                  curComponentStyle.top + curComponentHalfHeight,
                  top + componentHalfHeight
                ),
                lineNode: linesRef.value[1], // xc
                line: 'xc',
                dragShift: top + componentHalfHeight - curComponentHalfHeight,
                lineShift: top + componentHalfHeight
              },
              {
                isNearly: isNearly(curComponentStyle.top, bottom),
                lineNode: linesRef.value[2], // xb
                line: 'xb',
                dragShift: bottom,
                lineShift: bottom
              },
              {
                isNearly: isNearly(curComponentStyle.bottom, bottom),
                lineNode: linesRef.value[2], // xb
                line: 'xb',
                dragShift: bottom - curComponentStyle.height,
                lineShift: bottom
              }
            ],
            left: [
              {
                isNearly: isNearly(curComponentStyle.left, left),
                lineNode: linesRef.value[3], // yl
                line: 'yl',
                dragShift: left,
                lineShift: left
              },
              {
                isNearly: isNearly(curComponentStyle.right, left),
                lineNode: linesRef.value[3], // yl
                line: 'yl',
                dragShift: left - curComponentStyle.width,
                lineShift: left
              },
              {
                // 组件与拖拽节点的中间是否对齐
                isNearly: isNearly(
                  curComponentStyle.left + curComponentHalfwidth,
                  left + componentHalfwidth
                ),
                lineNode: linesRef.value[4], // yc
                line: 'yc',
                dragShift: left + componentHalfwidth - curComponentHalfwidth,
                lineShift: left + componentHalfwidth
              },
              {
                isNearly: isNearly(curComponentStyle.left, right),
                lineNode: linesRef.value[5], // yr
                line: 'yr',
                dragShift: right,
                lineShift: right
              },
              {
                isNearly: isNearly(curComponentStyle.right, right),
                lineNode: linesRef.value[5], // yr
                line: 'yr',
                dragShift: right - curComponentStyle.width,
                lineShift: right
              }
            ]
          }

          const needToShow: string[] = []
          const rotate = editorStore.curComponent?.style.rotate

          Object.keys(conditions).forEach((key) => {
            // 遍历符合的条件并处理
            conditions[key].forEach((condition: Condition) => {
              if (!condition.isNearly) return
              // 修改当前组件位移
              editorStore.setShapeSingleStyle({
                key,
                value:
                  rotate != 0
                    ? translatecurComponentShift(
                        key,
                        condition,
                        curComponentStyle
                      )
                    : condition.dragShift
              })

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

      const translatecurComponentShift = (
        key: string,
        condition: Record<
          'isNearly' | 'lineNode' | 'line' | 'dragShift' | 'lineShift',
          any
        >,
        curComponentStyle: StyleObject
      ) => {
        const { width, height } = editorStore.curComponent?.style as CompStyle
        if (key == 'top') {
          return Math.round(
            condition.dragShift - (height - curComponentStyle.height) / 2
          )
        }

        return Math.round(
          condition.dragShift - (width - curComponentStyle.width) / 2
        )
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
          // eslint-disable-next-line no-lonely-if
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
          // eslint-disable-next-line no-lonely-if
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

      return {
        lines,
        lineStatus,
        setLineRef
      }
    }
  })
</script>

<template>
  <div class="mark-line">
    <div
      v-for="item in lines"
      v-show="lineStatus[item] || false"
      :key="item"
      ref="setLineRef"
      class="line"
      :class="item.includes('x') ? 'xline' : 'yline'"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
  .mark-line {
    height: 100%;
  }

  .line {
    background: #59c7f9;
    position: absolute;
    z-index: 1000;
  }

  .xline {
    width: 100%;
    height: 1px;
  }

  .yline {
    width: 1px;
    height: 100%;
  }
</style>
