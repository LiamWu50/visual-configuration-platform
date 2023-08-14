import { AttrFormTypes } from '@/common/attr-form-types'
import utils from '@/utils/index'

import { BoxStyle, PrimitiveType, StyleAttrs } from './types'

export abstract class Primitive {
  public id: string
  public cName: string
  public name: string
  public icon: string
  public group: string
  public selected: boolean
  public visible: boolean
  public active: boolean
  public style: BoxStyle = {}
  public groupStyle: any
  public childPrimitives?: Primitive[]
  private customStyleAttrs: StyleAttrs[] = []

  protected constructor(options: PrimitiveType) {
    this.id = utils.createId()
    this.cName = options.cName
    this.name = options.name
    this.icon = options.icon
    this.group = options.group
    this.selected = false
    this.visible = true
    this.active = false
    this.style.width = options.width
    this.style.height = options.height
    this.groupStyle = options.groupStyle
    this.childPrimitives = []
  }

  get styleAttrs() {
    const baseStyleAttrs = this.getBaseStyleAttrs()
    return [baseStyleAttrs, ...this.customStyleAttrs]
  }

  /**
   * 显示
   */
  show() {
    this.visible = true
  }

  /**
   * 获取primitive的基础样式设置项
   * @returns Object
   */
  private getBaseStyleAttrs() {
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
  public updateStyle(style: BoxStyle) {
    Object.keys(style).forEach((key) => {
      if (key) this.style[key] = style[key]
    })
  }

  /**
   * 通过key来跟新样式
   * @param key String
   * @param value any
   */
  public updateStyleByKey(key: string, value: any) {
    this.style[key] = value
  }
}
