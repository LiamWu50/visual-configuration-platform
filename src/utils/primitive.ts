import { useEditorScale } from '@/hooks/use-editor-scale'
import { Primitive } from '@/primitives/primitive'
import type { DOMRect, Location, PrimitiveStyle } from '@/primitives/types'

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
export function calcPrimitiveAxis(style: PrimitiveStyle): Location {
  return {
    top: style.top,
    left: style.left,
    right: style.left + style.width,
    bottom: style.top + style.height
  }
}

/**
 *
 * @param style PrimitiveStyle
 * @param filter []
 * @returns PrimitiveStyle
 */
export function getStyle(style: PrimitiveStyle, filter: string[] = []) {
  const result = {} as any
  Object.keys(style).forEach((key) => {
    if (!filter.includes(key as never)) {
      if (style[key]) {
        result[key] = style[key]
        if (needUnit.includes(key)) result[key] += 'px'
      }
    }
  })

  return result
}

/**
 * 获取包围盒的样式
 * @param style PrimitiveStyle
 */
export function getBoundBoxStyle(style: PrimitiveStyle) {
  const pStyle: Record<string, string> = {}

  for (const [key, value] of Object.entries(style)) {
    if (value) pStyle[key] = `${value}px`
  }

  return pStyle
}

/**
 * 获取一个组件的位置信息
 * @param style PrimitiveStyle
 * @returns Location
 */
export function getPrimitiveLocation(style: PrimitiveStyle): Location {
  const bottom = style.top + style.height
  const right = style.left + style.width

  return {
    left: style.left,
    top: style.top,
    right,
    bottom
  }
}

// 将组合中的各个子组件拆分出来，并计算它们新的 style
export function decomposePrimitive(
  primitive: Primitive,
  editorRect: DOMRect,
  parentStyle: PrimitiveStyle
) {
  const { transByCurScale } = useEditorScale()
  const element = document.getElementById(`primitive${primitive.id}`)
  const rectInfo = element!.getBoundingClientRect()
  // 获取元素的中心点坐标
  const center = {
    x: transByCurScale(rectInfo.left - editorRect.left + rectInfo.width / 2),
    y: transByCurScale(rectInfo.top - editorRect.top + rectInfo.height / 2)
  }

  primitive.style.width =
    (parseFloat(primitive.groupStyle.width) / 100) * parentStyle.width
  primitive.style.height =
    (parseFloat(primitive.groupStyle.height) / 100) * parentStyle.height
  // 计算出元素新的 top left 坐标
  primitive.style.left = center.x - primitive.style.width / 2
  primitive.style.top = center.y - primitive.style.height / 2
  primitive.groupStyle = {} as CSSStyleDeclaration
}

/**
 * 创建组的样式
 * @param groupPrimitive Primitive
 */
export function createGroupStyle(groupPrimitive: Primitive) {
  const parentStyle = groupPrimitive.style as PrimitiveStyle
  groupPrimitive.childPrimitives?.forEach((primitive: Primitive) => {
    // primitive.groupStyle 的 top left 是相对于 group 组件的位置
    if (!Object.keys(primitive.groupStyle).length) {
      const style = { ...primitive.style } as PrimitiveStyle

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
