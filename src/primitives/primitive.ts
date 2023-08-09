import { AttrFormTypes } from '@/common/attr-form-types'
import utils from '@/utils/index'

import { BoxStyle, PrimitiveType, StyleAttrs } from './types'

export abstract class Primitive {
  id: string
  cName: string
  name: string
  icon: string
  selected: boolean
  visible: boolean
  active: boolean
  style: BoxStyle = {}
  _customStyleAttrs: StyleAttrs[] = []

  protected constructor(options: PrimitiveType) {
    this.id = utils.createId()
    this.cName = options.cName
    this.name = options.name
    this.icon = options.icon
    this.selected = false
    this.visible = true
    this.active = false
    this.style.width = options.width
    this.style.height = options.height
  }

  /**
   * 显示
   */
  show() {
    this.visible = true
  }

  get updateStyle() {
    return this._updateStyle
  }

  get updateStyleByKey() {
    return this._updateStyleByKey
  }

  get styleAttrs() {
    const baseStyleAttrs = this._getBaseStyleAttrs()
    return [baseStyleAttrs, ...this._customStyleAttrs]
  }

  /**
   * 获取primitive的基础样式设置项
   * @returns Object
   */
  _getBaseStyleAttrs() {
    return {
      label: '基础样式',
      prop: 'position',
      children: [
        {
          label: '左边距',
          prop: 'left',
          type: AttrFormTypes.NUMBER,
          options: {
            value: this.style.left,
            precision: 0
          }
        },
        {
          label: '上边距',
          prop: 'top',
          type: AttrFormTypes.NUMBER,
          options: {
            value: this.style.top,
            precision: 0
          }
        },
        {
          label: '宽度',
          prop: 'width',
          type: AttrFormTypes.NUMBER,
          options: {
            value: this.style.width,
            precision: 0
          }
        },
        {
          label: '高度',
          prop: 'height',
          type: AttrFormTypes.NUMBER,
          options: {
            value: this.style.height,
            precision: 0
          }
        }
      ]
    }
  }

  /**
   * 更新primitive的样式
   * @param style Object
   */
  _updateStyle(style: BoxStyle) {
    Object.keys(style).forEach((key) => {
      if (key) this.style[key] = style[key]
    })
  }

  /**
   * 通过key来跟新样式
   * @param key String
   * @param value any
   */
  _updateStyleByKey(key: string, value: any) {
    this.style[key] = value
  }
}
