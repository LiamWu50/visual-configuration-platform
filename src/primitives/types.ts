import { AttrFormTypes } from '@/common/attr-form-types'
import { MapSources } from '@/common/map-sources'

export interface Vector {
  x: number
  y: number
}

// 画布容器类型
export interface CanvasStyle {
  width: number
  height: number
}

export interface DOMRectStyle {
  width: number
  height: number
  left: number
  top: number
}

export interface PrimitiveStyle extends DOMRectStyle {
  [key: string]: string | number | boolean
}

export interface Location {
  right: number
  left: number
  top: number
  bottom: number
}

export interface PrimitiveType {
  cName: string
  name: string
  icon: string
  group: string
  groupStyle?: PrimitiveStyle
  width: number
  height: number
}

export interface CSSStyleDeclaration {
  [index: string]: string
}

export interface AttrType {
  prop: string
  label: string
  type?: AttrFormTypes
  showLabel?: boolean
  options: {
    [key: string]: any
    value: string | number | boolean | any
  }
}

export interface StyleAttrs {
  label: string
  prop: string
  children: AttrType[]
}

export interface DOMRect {
  x: number
  y: number
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
}

export interface CanvasScene {
  type: string
  scene: MapSources[]
}
