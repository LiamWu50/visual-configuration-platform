import { AttrFormTypes } from '@/common/attr-form-types'

export interface PrimitiveType {
  cName: string
  name: string
  icon: string
  width: number
  height: number
}

export interface BoxStyle {
  [key: string]: number | undefined
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
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
