import * as Cesium from 'cesium/Cesium.js'

export default class PointStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
   * @param {Cesium.Cartesian3} [options.option]  位置
   * @param {Cesium.Color} [options.color]  颜色
   * @param {Cesium.HeightReference} [options.heightReference]   离地模式CLAMP_TO_GROUND、RELATIVE_TO_GROUND、NONE
   * @param {Cesium.Cartesian3} [options.eyeOffset] 坐标偏移量
   * @param {Number} [options.height] 高度
   * @param {Cesium.HorizontalOrigin}[options.horizontalOrigin] 标签的位置 CENTER、LEFT、RIGHT
   * @param {Image || URI || Canvas} [options.image] 图片 Image, URI, or Canvas
   * @param {Cesium.Cartesian2} [options.pixelOffset] 图片位置偏移量
   * @param {Number} [options.scale] 缩放
   * @param {Number} [options.width] 广告牌宽度
   * @param {Cesium.NearFarScalar} [options.scaleByDistance] 距离缩放点的NearFarScalar属性
   * @param {Boolean} [options.show]  是否显示
   * @param {Cesium.VerticalOrigin} [options.verticalOrigin] 垂直原点的位置 CENTER、BOTTOM、BASELINE、TOP
   */
  constructor(options = {}) {
    this._id = options.id
    this._position = options.position
    this._color = Cesium.defaultValue(options.color, new Cesium.Color.fromBytes(0, 255, 255, 250))
    this._heightReference = Cesium.defaultValue(options.heightReference, Cesium.HeightReference.CLAMP_TO_GROUND)
    this._eyeOffset = Cesium.defaultValue(options.eyeOffset, Cesium.Cartesian3.ZERO)
    this._height = Cesium.defaultValue(options.height, undefined)
    this._horizontalOrigin = Cesium.defaultValue(options.horizontalOrigin, Cesium.HorizontalOrigin.CENTER)
    this._image = Cesium.defaultValue(options.image, undefined)
    this._pixelOffset = Cesium.defaultValue(options.pixelOffset, undefined)
    this._scale = Cesium.defaultValue(options.scale, 1)
    this._width = Cesium.defaultValue(options.width, undefined)
    this._scaleByDistance = Cesium.defaultValue(options.scaleByDistance, new Cesium.NearFarScalar())
    this._verticalOrigin = Cesium.defaultValue(options.verticalOrigin, Cesium.VerticalOrigin.BOTTOM)
    this._show = Cesium.defaultValue(options.show, true)
  }

  get id() {
    return this._id
  }

  get position() {
    return this._position
  }

  get color() {
    return this._color
  }

  get heightReference() {
    return this._heightReference
  }

  get eyeOffset() {
    return this._eyeOffset
  }

  get height() {
    return this._height
  }

  get horizontalOrigin() {
    return this._horizontalOrigin
  }

  get image() {
    return this._image
  }

  get pixelOffset() {
    return this._pixelOffset
  }

  get scale() {
    return this._scale
  }

  get width() {
    return this._width
  }

  get scaleByDistance() {
    return this._scaleByDistance
  }

  get show() {
    return this._show
  }

  get verticalOrigin() {
    return this._verticalOrigin
  }
}
