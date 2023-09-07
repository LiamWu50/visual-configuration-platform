import { PrimitiveStyle } from '@/primitives/types'

type Directions = {
  [key: string]: number
}

export function useBoundBox() {
  const curRef = ref<HTMLElement | null>(null)
  const cursors = ref<any>({})

  const drawPoints: Directions = {
    lt: 0,
    t: 45,
    rt: 90,
    r: 135,
    rb: 180,
    b: 225,
    lb: 270,
    l: 315
  }

  // 每个范围的角度对应的光标
  const angleToCursor = [
    { start: 338, end: 23, cursor: 'nw' },
    { start: 23, end: 68, cursor: 'n' },
    { start: 68, end: 113, cursor: 'ne' },
    { start: 113, end: 158, cursor: 'e' },
    { start: 158, end: 203, cursor: 'se' },
    { start: 203, end: 248, cursor: 's' },
    { start: 248, end: 293, cursor: 'sw' },
    { start: 293, end: 338, cursor: 'w' }
  ]

  // 位置点的样式
  const pointStyle = (pointStr: string, pStyle: PrimitiveStyle) => {
    const { width = 0, height = 0 } = pStyle
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

  return {
    curRef,
    cursors,
    angleToCursor,
    drawPoints,
    pointStyle
  }
}
