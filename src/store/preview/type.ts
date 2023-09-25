import { Primitive } from '@/primitives/primitive'
import { CanvasScene } from '@/primitives/types'

export interface ChartForPreview {
  primitives: Primitive[]
  canvasStyle: {
    width: number
    height: number
  }
  canvasScene: CanvasScene
}

export interface MapForPreview {
  dataSource: unknown
}
