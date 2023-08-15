import { Primitive } from '@/primitives/primitive'
import type {
  BoxStyle,
  DOMRect,
  DOMRectStyle,
  Location
} from '@/primitives/types'

import { toPercent } from './translate'

const needUnit = [
  'fontSize',
  'width',
  'height',
  'top',
  'left',
  'borderWidth',
  'letterSpacing',
  'borderRadius'
]

/**
 * 计算组件笛卡尔坐标系坐标
 * @param style 组件在画布中的位置
 * @returns 组件坐标
 */
export function calcPrimitiveAxis(style: DOMRectStyle): Location {
  return {
    top: style.top,
    left: style.left,
    right: style.left + style.width,
    bottom: style.top + style.height
  }
}

export function getStyle(style: DOMRectStyle, filter = []) {
  const result = {} as any
  Object.keys(style).forEach((key) => {
    if (!filter.find((item) => key === item)) {
      if (!!style[key]) {
        result[key] = style[key]

        if (needUnit.includes(key)) {
          result[key] += 'px'
        }
      }
    }
  })

  return result
}

// 获取一个组件的样式
export function getPrimitiveStyle(style: BoxStyle) {
  style = { ...style }
  style.bottom = style.top! + style.height!
  style.right = style.left! + style.width!

  return style
}

// 将组合中的各个子组件拆分出来，并计算它们新的 style
export function decomposePrimitive(
  primitive: Primitive,
  editorRect: DOMRect,
  parentStyle: BoxStyle
) {
  const element = document.getElementById(`primitive${primitive.id}`)
  const rectInfo = element!.getBoundingClientRect()
  // 获取元素的中心点坐标
  const center = {
    x: rectInfo.left - editorRect.left + rectInfo.width / 2,
    y: rectInfo.top - editorRect.top + rectInfo.height / 2
  }

  primitive.style.width =
    (parseFloat(primitive.groupStyle.width) / 100) * parentStyle.width!
  primitive.style.height =
    (parseFloat(primitive.groupStyle.height) / 100) * parentStyle.height!
  // 计算出元素新的 top left 坐标
  primitive.style.left = center.x - primitive.style.width / 2
  primitive.style.top = center.y - primitive.style.height / 2
  primitive.groupStyle = {}
}

/**
 * 创建组的样式
 * @param groupPrimitive Primitive
 */
export function createGroupStyle(groupPrimitive: Primitive) {
  const parentStyle = groupPrimitive.style as DOMRectStyle
  groupPrimitive.childPrimitives?.forEach((primitive: Primitive) => {
    // primitive.groupStyle 的 top left 是相对于 group 组件的位置
    if (!primitive.groupStyle) {
      const style = { ...primitive.style } as DOMRectStyle

      primitive.groupStyle = getStyle(style)

      primitive.groupStyle.left = toPercent(
        (style.left - parentStyle.left) / parentStyle.width
      )
      primitive.groupStyle.top = toPercent(
        (style.top - parentStyle.top) / parentStyle.height
      )
      primitive.groupStyle.width = toPercent(style.width / parentStyle.width)
      primitive.groupStyle.height = toPercent(style.height / parentStyle.height)
    }
  })
}
