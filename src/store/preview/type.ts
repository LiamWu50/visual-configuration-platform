import { Primitive } from '@/primitives/primitive'

export interface ChartForPreview {
  primitives: Primitive[]
  canvasStyle: {
    width: number
    height: number
  }
}
