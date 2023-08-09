import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class RectangleGraphic extends Graphics {
  /**
   * 矩形要素
   * @param {String} [options.id] 矩形要素id，可选项
   * @param {String} [options.name] 矩形要素name，可选项
   * @param {Cesium.Cartesian3} [options.position] 矩形的位置
   * @param {Cesium.CallbackProperty} [options.coordinates] 坐标信息
   * @param {Boolean} [options.show] 是否显示，可选项
   * @param {Boolean} [options.fill] 是否填充，可选项
   * @param {Number} [options.heightReference] 多边形的恒定高度，可选项
   * @param {Boolean} [options.outline] 是否显示边线，
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色，
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Cesium.Material} [options.material] 矩形的填充样式
   * @param {Cesium.HeightReference} [options.heightReference=NONE] 高度属性
   */

  constructor(options) {
    super(options.id, options.name)

    this._coordinates = options.coordinates
    this._positions = options.positions
    this._classificationType = options.classificationType
    this._extrudedHeight = options.extrudedHeight
    this._fill = options.fill
    this._height = this._heightReference === Cesium.HeightReference.CLAMP_TO_GROUND ? undefined : options.height
    this._heightReference = options.heightReference
    this._outline = options.outline
    this._outlineColor = options.outlineColor
    this._outlineWidth = options.outlineWidth
    this._material = options.material
    this._show = options.show

    this._entity.rectangle = new Cesium.RectangleGraphics({
      coordinates: this._coordinates,
      classificationType: this._classificationType,
      extrudedHeight: this._extrudedHeight,
      fill: this._fill,
      height: this._height,
      heightReference: this._heightReference,
      outline: this._outline,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      material: this._material,
      show: this._show
    })

    //创建外边框
    // this._entity.polyline = new Cesium.PolylineGraphics({
    //   positions: this._positions,
    //   width: this._outlineWidth,
    //   material: this._outlineColor,
    //   clampToGround: Cesium.HeightReference.CLAMP_TO_GROUND ? true : false,
    // })
  }

  get entity() {
    return this._entity
  }

  get coordinates() {
    return this._coordinates
  }

  set coordinates(value) {
    this._coordinates = value
    this._entity.coordinates = value
  }

  get position() {
    return this._position
  }

  set position(value) {
    this._position = value
    this._entity.position = value
  }

  get classificationType() {
    return this._classificationType
  }

  set classificationType(value) {
    this._classificationType = value
    this._entity.rectangle.classificationType = value
  }

  get extrudedHeight() {
    return this._extrudedHeight
  }

  set extrudedHeight(value) {
    this._extrudedHeight = value
    this._entity.rectangle.extrudedHeight = value
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this._entity.rectangle.fill = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.rectangle.height = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.rectangle.heightReference = value
  }

  get outline() {
    return this._outline
  }

  set outline(value) {
    this._outline = value
    this._entity.rectangle.outline = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._outlineColor = value
    this._entity.rectangle.outlineColor = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.rectangle.outlineWidth = value
  }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.rectangle.material = value
  }

  get show() {
    return this._show
  }

  set show(value) {
    this._show = value
    this._entity.rectangle.show = value
  }
}
