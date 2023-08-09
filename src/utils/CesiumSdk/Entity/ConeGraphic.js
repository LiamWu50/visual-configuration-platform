import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class ConeGraphic extends Graphics {
  /**
   * 圆锥要素
   * @param {String} [options.id] 圆锥要素id，可选项
   * @param {String} [options.name] 圆锥要素name，可选项
   * @param {Cesium.Cartesian3} [options.position] 圆锥的位置
   * @param {Number} [options.bottomRadius] 圆锥底面半径
   * @param {Number} [options.topRadius] 圆锥顶面半径
   * @param {Number} [options.height] 圆锥高度
   * @param {Boolean} [options.show] 是否显示，可选项
   * @param {Boolean} [options.fill] 是否填充，可选项
   * @param {Number} [options.heightReference] 多边形的恒定高度，可选项
   * @param {Boolean} [options.outline] 是否显示边线，
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色，
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Cesium.Material} [options.material] 圆锥的填充样式
   * @param {Cesium.HeightReference} [options.heightReference=NONE] 高度属性
   */

  constructor(options) {
    super(options.id, options.name)

    this._position = options.position
    this._fill = options.fill
    this._bottomRadius = options.bottomRadius
    this._topRadius = 0.0001
    this._height = Cesium.defaultValue(options.height, 100)
    this._outline = Cesium.defaultValue(options.outline, false)
    this._outlineColor = Cesium.defaultValue(options.outlineColor, Cesium.Color.fromBytes(0, 255, 255, 200))
    this._outlineWidth = Cesium.defaultValue(options.outlineWidth, 1)
    this._material = Cesium.defaultValue(options.material, Cesium.Color.fromBytes(0, 255, 255, 80))
    this._heightReference = Cesium.defaultValue(options.heightReference, Cesium.HeightReference.CLAMP_TO_GROUND)

    options.length = this._height
    options.topRadius = this._topRadius
    options.outline = this._outline
    options.outlineColor = this._outlineColor
    options.outlineWidth = this._outlineWidth
    options.material = this._material
    options.heightReference = this._heightReference

    this._entity.cylinder = new Cesium.EllipseGraphics(options)
    this._entity.cylinder.length = this._height
    this._entity.cylinder.bottomRadius = this._bottomRadius
    this._entity.cylinder.topRadius = 0.0001
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
