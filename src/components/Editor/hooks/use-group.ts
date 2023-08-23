import { Primitive } from '@/primitives/primitive'
import { Location } from '@/primitives/types'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import { getPrimitiveLocation } from '@/utils/primitive'

export function useGroup() {
  const editorStore = useEditorStore()
  const areaSelectStore = useAreaSelectStore()
  const { primitives, editorScale } = storeToRefs(editorStore)
  const variables = reactive({
    editorX: 0,
    editorY: 0,
    start: {
      x: 0,
      y: 0
    },
    width: 0,
    height: 0
  })

  /**
   * 开始绘制包围盒范围
   * @param e MouseEvent
   */
  const onDrawGroupBoundry = (e: MouseEvent) => {
    hideAreaSelect()

    const editor = document.getElementById('editor')
    const rectInfo = editor!.getBoundingClientRect()

    variables.editorX = rectInfo.x
    variables.editorY = rectInfo.y

    const startX = e.clientX
    const startY = e.clientY

    variables.start.x = startX - variables.editorX
    variables.start.y = startY - variables.editorY
    // 展示选中区域
    areaSelectStore.setAreaSelectVisible(true)

    const move = (moveEvent: MouseEvent) => {
      variables.width = Math.abs(moveEvent.clientX - startX)
      variables.height = Math.abs(moveEvent.clientY - startY)
      if (moveEvent.clientX < startX) {
        variables.start.x = moveEvent.clientX - variables.editorX
      }

      if (moveEvent.clientY < startY) {
        variables.start.y = moveEvent.clientY - variables.editorY
      }
    }

    const up = (e: MouseEvent) => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)

      if (e.clientX == startX && e.clientY == startY) {
        hideAreaSelect()
        return
      }

      saveAreaSelectData()
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  /**
   * 隐藏包围盒子
   */
  const hideAreaSelect = () => {
    variables.width = 0
    variables.height = 0
    areaSelectStore.setAreaSelectVisible(false)
    areaSelectStore.setAreaSelectOptions(null, [])
  }

  /**
   * 保存区域选择的数据
   */
  const saveAreaSelectData = () => {
    // 获取选中区域的组件数据
    const primitives = getInternalPrimitives()

    if (primitives.length <= 1) {
      hideAreaSelect()
      return
    }

    let top = Infinity,
      left = Infinity,
      right = -Infinity,
      bottom = -Infinity

    primitives.forEach((primitive) => {
      let style = {} as Location
      if (primitive.cName === 'Group') {
        primitive.childPrimitives?.forEach((item: Primitive) => {
          const element = document.getElementById(`primitive${item.id}`)
          const rectInfo = element!.getBoundingClientRect()

          style.left = rectInfo.left - variables.editorX
          style.top = rectInfo.top - variables.editorY
          style.right = rectInfo.right - variables.editorX
          style.bottom = rectInfo.bottom - variables.editorY

          if (style.left < left) left = style.left
          if (style.top < top) top = style.top
          if (style.right > right) right = style.right
          if (style.bottom > bottom) bottom = style.bottom
        })
      } else {
        style = getPrimitiveLocation(primitive.style)
      }
      if (style.left < left) left = style.left
      if (style.top < top) top = style.top
      if (style.right > right) right = style.right
      if (style.bottom > bottom) bottom = style.bottom
    })

    variables.start.x = left
    variables.start.y = top
    variables.width = right - left
    variables.height = bottom - top

    const style = {
      left,
      top,
      width: variables.width,
      height: variables.height
    }
    areaSelectStore.setAreaSelectOptions(style, primitives)
  }

  /**
   * 获取当前回执包围盒内部的 primitive
   * @returns Pimitive[]
   */
  const getInternalPrimitives = () => {
    const { x, y } = variables.start
    const allPrimitives = primitives.value as Primitive[]

    return allPrimitives.filter((primitive) => {
      const { left, top, width, height } = primitive.style
      if (
        x <= left &&
        y <= top &&
        left + width <= x + variables.width &&
        top + height <= y + variables.height
      )
        return primitive
    })
  }

  return {
    groupState: variables,
    onDrawGroupBoundry
  }
}
