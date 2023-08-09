import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class CylinderGraphic extends Graphics {
  /**
   * 圆柱要素
   * @param {String} [options.id] 圆柱要素id，可选项
   * @param {String} [options.name] 圆柱要素name，可选项
   * @param {Cesium.Cartesian3} [options.position] 圆柱的位置
   * @param {Number} [options.bottomRadius] 圆柱底面半径
   * @param {Number} [options.topRadius] 圆柱顶面半径
   * @param {Number} [options.height] 圆柱高度
   * @param {Boolean} [options.show] 是否显示，可选项
   * @param {Boolean} [options.fill] 是否填充，可选项
   * @param {Number} [options.heightReference] 多边形的恒定高度，可选项
   * @param {Boolean} [options.outline] 是否显示边线，
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色，
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Cesium.Material} [options.material] 圆柱的填充样式
   * @param {Cesium.HeightReference} [options.heightReference=NONE] 高度属性
   */

  constructor(options) {
    super(options.id, options.name)

    this._bottomRadius = options.bottomRadius
    this._topRadius = options.topRadius
    this._position = options.position
    this._fill = options.fill
    this._heightReference = options.heightReference
    this._length = options.length
    this._outline = options.outline
    this._outlineColor = options.outlineColor
    this._outlineWidth = options.outlineWidth
    this._material = options.material
    this._show = options.show

    this._entity.cylinder = new Cesium.EllipseGraphics({
      position: this._position,
      fill: this._fill,
      heightReference: this._heightReference,
      outline: this._outline,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      material: this._material,
      show: this._show
    })
    this._entity.cylinder.length = this._length
    this._entity.cylinder.bottomRadius = this._bottomRadius
    this._entity.cylinder.topRadius = this._topRadius
  }

  get entity() {
    return this._entity
  }

  get position() {
    return this._position
  }

  set position(value) {
    this._position = value
    this._entity.position = value
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this._entity.cylinder.fill = value
  }

  get bottomRadius() {
    return this._bottomRadius
  }

  set bottomRadius(value) {
    this._bottomRadius = value
    this._entity.cylinder.bottomRadius = value
  }

  get topRadius() {
    return this._topRadius
  }

  set topRadius(value) {
    this._topRadius = value
    this._entity.cylinder.topRadius = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.cylinder.length = value
  }

  get outline() {
    return this._outline
  }

  set outline(value) {
    this._outline = value
    this._entity.cylinder.outline = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._outlineColor = value
    this._entity.cylinder.outlineColor = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.cylinder.outlineWidth = value
  }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.cylinder.material = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.cylinder.heightReference = value
  }
}
