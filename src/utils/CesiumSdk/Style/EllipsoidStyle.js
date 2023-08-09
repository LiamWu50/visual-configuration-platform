import * as Cesium from 'cesium/Cesium.js'

export default class EllipsoidStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
   * @param {Boolean} [options.fill] 是否填充
   * @param {Cesium.HeightReference} [options.heightReference] 离地类型 NONE、CLAMP_TO_GROUND、RELATIVE_TO_GROUND
   * @param {Cesium.material} [options.material] 线贴图
   * @param {Boolean} [options.outline] 边框线
   * @param {Cesium.Color}[options.outlineColor] 边框线颜色
   * @param {Number}[options.outlineWidth] 边框线宽度
   * @param {Number} [options.radii] 椭球半径
   * @param {Cesium.Cartesian3} [options.position] 位置
   * @param {Boolean} [options.show]  是否显示
   */
  constructor(options = {}) {
    this._radii = options.radii
    this._position = options.position
    this._fill = Cesium.defaultValue(options.fill, true)
    this._heightReference = Cesium.defaultValue(options.heightReference, Cesium.HeightReference.NONE)
    this._outline = Cesium.defaultValue(options.outline, true)
    this._outlineColor = Cesium.defaultValue(options.outlineColor, Cesium.Color.WHITE)
    this._outlineWidth = Cesium.defaultValue(options.outlineWidth, 3)
    this._material = Cesium.defaultValue(options.material, new Cesium.Color.fromBytes(0, 255, 255, 200))
    this._show = Cesium.defaultValue(options.show, true)
  }

  get positions() {
    return this._positions
  }

  get radii() {
    return this._radii
  }

  get fill() {
    return this._fill
  }

  get height() {
    return this._height
  }

  get heightReference() {
    return this._heightReference
  }

  get outline() {
    return this._outline
  }

  get outlineColor() {
    return this._outlineColor
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  get material() {
    return this._material
  }

  get show() {
    return this._show
  }
}
