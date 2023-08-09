import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class PointGraphic extends Graphics {
  /**
   * 点要素
   * @param {Cesium.Cartesian3} [options.positions] 点坐标
   * @param {String} [options.id] 点要素id，可选项
   * @param {String} [options.name] 点要素name，可选项
   * @param {Number} [options.pixelSize] 点要素大小，可选项
   * @param {Cesium.Color} [options.color] 点要素颜色，可选项
   * @param {Cesium.Color} [options.outlineColor)] 点要素边廓线颜色，可选项
   * @param {Number} [options.outlineWidth] 点要素边廓线宽度，可选项
   * @param {Cesium.HeightReference} [options.heightReference=NONE] 高度属性
   */
  constructor(options = {}) {
    super(options.id, options.name)

    this._position = options.position
    this._entity.position = options.position
    this._heightReference = options.heightReference
    this._pixelSize = options.pixelSize
    this._color = options.color
    this._outlineWidth = options.outlineWidth
    this._outlineColor = options.outlineColor
    this._disableDepthTestDistance = options.disableDepthTestDistance

    this._entity.point = new Cesium.PointGraphics({
      pixelSize: this._pixelSize,
      color: this._color,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      disableDepthTestDistance: this._disableDepthTestDistance
    })
  }

  get entity() {
    return this._entity
  }

  get position() {
    return this._position
  }

  set position(value) {
    this._entity.position = value
    this._position = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.point.heightReference = value
  }

  get pixelSize() {
    return this._pixelSize
  }

  set pixelSize(value) {
    this._pixelSize = value
    this._entity.point.pixelSize = value
  }

  get color() {
    return this._color
  }

  set color(value) {
    this._color = value
    this._entity.point.color = value
  }

  get outline() {
    return this._outline
  }

  set outline(value) {
    this._outline = value
    this._entity.point.outline = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.point.outlineWidth = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._houtlineColor = value
    this._entity.point.outlineColor = value
  }
}
