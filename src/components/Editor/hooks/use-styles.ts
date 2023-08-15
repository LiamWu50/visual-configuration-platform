import { BoxStyle, CSSStyleDeclaration } from '@/primitives/types'

export const useStyles = () => {
  /**
   * 获取包围盒的样式
   * @param style BoxStyle
   */
  const getBoundBoxStyle = (style: BoxStyle) => {
    const pStyle = {} as CSSStyleDeclaration

    for (const [key, value] of Object.entries(style)) {
      if (value) pStyle[key] = value + 'px'
    }

    return pStyle
  }

  /**
   * 获取渲染节点的样式
   * @param style BoxStyle
   */
  const getPrimitiveStyle = (style: BoxStyle) => {
    const pStyle = {} as CSSStyleDeclaration

    for (const [key, value] of Object.entries(style)) {
      if (value) pStyle[key] = value + 'px'
    }

    return pStyle
  }

  return {
    getBoundBoxStyle,
    getPrimitiveStyle
  }
}
