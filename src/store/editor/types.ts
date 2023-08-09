import { CanvasStyleData, Component } from '../compose/types'

export interface Editor {
  editMode: string
  canvasStyleData: CanvasStyleData
  isInEdiotr: boolean
  componentData: Component[]
  curComponent: null | Component
  curComponentIndex: null | number
  isClickComponent: boolean
  menuTop: number
  menuLeft: number
  menuShow: boolean
}
