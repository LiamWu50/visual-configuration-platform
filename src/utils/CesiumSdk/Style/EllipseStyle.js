import * as Cesium from 'cesium/Cesium.js'

export default class EllipseStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
   * @param {Cesium.ClassificationType} [options.classificationType] 指定此折线在地面上时将对地形、3D贴图或两者进行分类  TERRAIN、CESIUM_3D_TILE、BOTH
   * @param {} [options.extrudedHeight]  多边形拉伸高度
   * @param {Boolean} [options.fill] 是否填充
   * @param {Number} [options.height] 高度
   * @param {Cesium.HeightReference} [options.heightReference] 离地类型 NONE、CLAMP_TO_GROUND、RELATIVE_TO_GROUND
   * @param {Cesium.material} [options.material] 线贴图
   * @param {Boolean} [options.outline] 边框线
   * @param {Cesium.Color}[options.outlineColor] 边框线颜色
   * @param {Number}[options.outlineWidth] 边框线宽度
   * @param {Number} [options.semiMajorAxis] 长半轴
   * @param {Number} [options.semiMinorAxis] 短半轴
   * @param {Cesium.Cartesian3} [options.position] 位置
   * @param {Boolean} [options.show]  是否显示
   */
  constructor(options = {}) {
    this._semiMajorAxis = options.semiMajorAxis
    this._semiMinorAxis = options.semiMinorAxis
    this._position = options.position
    this._classificationType = Cesium.defaultValue(options.classificationType, Cesium.ClassificationType.BOTH)
    this._extrudedHeight = Cesium.defaultValue(options.extrudedHeight, undefined)
    this._fill = Cesium.defaultValue(options.fill, true)
    this._height = Cesium.defaultValue(options.height, undefined)
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

  get semiMajorAxis() {
    return this._semiMajorAxis
  }

  get semiMinorAxis() {
    return this._semiMinorAxis
  }

  get classificationType() {
    return this._classificationType
  }

  get extrudedHeight() {
    return this._extrudedHeight
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
