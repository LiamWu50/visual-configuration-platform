import * as Cesium from 'cesium/Cesium.js'

export default class PointStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
   * @param {Cesium.Color} [options.color]  颜色
   * @param {Cesium.HeightReference} [options.heightReference]   离地模式CLAMP_TO_GROUND、RELATIVE_TO_GROUND、NONE
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Number} [options.pixelSize] 像素大小
   * @param {Cesium.NearFarScalar} [options.scaleByDistance] 距离缩放点的NearFarScalar属性
   * @param {Boolean} [options.show]  是否显示
   */
  constructor(options = {}) {
    this._color = Cesium.defaultValue(options.color, new Cesium.Color.fromBytes(0, 255, 255, 80))
    this._heightReference = Cesium.defaultValue(options.heightReference, Cesium.HeightReference.CLAMP_TO_GROUND)
    this._outlineColor = Cesium.defaultValue(options.outlineColor, new Cesium.Color.fromBytes(0, 255, 255, 200))
    this._outlineWidth = Cesium.defaultValue(options.outlineWidth, 3)
    this._pixelSize = Cesium.defaultValue(options.pixelSize, 5)
    this._scaleByDistance = Cesium.defaultValue(options.scaleByDistance, new Cesium.NearFarScalar())
    this._show = Cesium.defaultValue(options.show, true)
  }

  get color() {
    return this._color
  }

  get heightReference() {
    return this._heightReference
  }

  get outlineColor() {
    return this._outlineColor
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  get pixelSize() {
    return this._pixelSize
  }

  get scaleByDistance() {
    return this._scaleByDistance
  }

  get show() {
    return this._show
  }
}
