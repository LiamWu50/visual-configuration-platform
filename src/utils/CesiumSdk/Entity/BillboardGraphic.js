import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class BillboardGraphic extends Graphics {
  /**
   * 广告牌要素
   * @param {Object} [options={}] 可选项
   * @param {Cesium.Cartesian3} [options.positions] 点坐标
   * @param {String} [options.id] 点要素id，可选项
   * @param {String} [options.name] 点要素name，可选项
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
    super(options.id, options.name)

    this._position = options.position
    this._entity.position = options.position
    this._color = options.color
    this._heightReference = options.heightReference
    this._eyeOffset = options.eyeOffset
    this._height = options.height
    this._horizontalOrigin = options.horizontalOrigin
    this._image = options.image
    this._pixelOffset = options.pixelOffset
    this._scale = options.scale
    this._width = options.width
    this._scaleByDistance = options.scaleByDistance
    this._verticalOrigin = options.verticalOrigin
    this._show = options.show

    this._entity.billboard = new Cesium.BillboardGraphics({
      position: this._position,
      color: this._color,
      heightReference: this._heightReference,
      eyeOffset: this._eyeOffset,
      height: this._height,
      horizontalOrigin: this._horizontalOrigin,
      image: this._image,
      pixelOffset: this._pixelOffset,
      scale: this._scale,
      width: this._width,
      // scaleByDistance: this._scaleByDistance,
      verticalOrigin: this._verticalOrigin,
      show: this._show
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

  get color() {
    return this._color
  }

  set color(value) {
    this._color = value
    this._entity.billboard.color = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.billboard.heightReference = value
  }

  get eyeOffset() {
    return this._eyeOffset
  }

  set eyeOffset(value) {
    this._eyeOffset = value
    this._entity.billboard.eyeOffset = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.billboard.height = value
  }

  get horizontalOrigin() {
    return this._horizontalOrigin
  }

  set horizontalOrigin(value) {
    this._horizontalOrigin = value
    this._entity.billboard.horizontalOrigin = value
  }

  get image() {
    return this._image
  }

  set image(value) {
    this._image = value
    this._entity.billboard.image = value
  }

  get pixelOffset() {
    return this._pixelOffset
  }

  set pixelOffset(value) {
    this._pixelOffset = value
    this._entity.billboard.pixelOffset = value
  }

  get scale() {
    return this._scale
  }

  set scale(value) {
    this._scale = value
    this._entity.billboard.scale = value
  }

  get width() {
    return this._width
  }

  set width(value) {
    this._width = value
    this._entity.billboard.width = value
  }

  get scaleByDistance() {
    return this._scaleByDistance
  }

  set scaleByDistance(value) {
    this._scaleByDistance = value
    this._entity.billboard.scaleByDistance = value
  }

  get verticalOrigin() {
    return this._verticalOrigin
  }

  set verticalOrigin(value) {
    this._verticalOrigin = value
    this._entity.billboard.verticalOrigin = value
  }

  get show() {
    return this._show
  }

  set show(value) {
    this._show = value
    this._entity.billboard.imashowge = value
  }
}
