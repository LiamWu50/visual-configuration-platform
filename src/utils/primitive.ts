import type { DOMRectStyle, Location } from '@/primitives/types'

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
