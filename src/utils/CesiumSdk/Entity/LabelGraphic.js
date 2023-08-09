import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class LabelGraphic extends Graphics {
  /**
   * 标签要素
   * @param {Object} [options={}] 可选项
   * @param {Cesium.Cartesian3} [options.positions] 标签坐标
   * @param {String} [options.id] 标签要素id，可选项
   * @param {String} [options.name] 标签要素name，可选项
   * @param {Cesium.Color} [options.backgroundColor] 背景色
   * @param {Cesium.Cartesian2} [options.backgroundPadding] 背景边距
   * @param {Cesium.Cartesian3} [options.eyeOffset] 标签的坐标偏移量
   * @param {Cesium.Color} [options.fillColor]  填充色
   * @param {CssFont} [options.font] 字体
   * @param {Cesium.HeightReference} [options.heightReference]   离地模式CLAMP_TO_GROUND、RELATIVE_TO_GROUND、NONE
   * @param {Cesium.HorizontalOrigin} [options.horizontalOrigin] 标签的位置 CENTER、LEFT、RIGHT
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Number} [options.pixelSize] 像素大小
   * @param {Number} [options.scale] 缩放
   * @param {Cesium.NearFarScalar} [options.scaleByDistance] 距离缩放点的NearFarScalar属性
   * @param {Boolean} [options.show]  是否显示
   * @param {Boolean} [options.showBackground] 是否显示背景
   * @param {Cesium.LabelStyle} [options.style]  如何绘制标签 FILL、OUTLINE、FILL_AND_OUTLINE
   * @param {String} [options.text] 文本
   * @param {Cesium.VerticalOrigin} [options.verticalOrigin] 垂直原点的位置 CENTER、BOTTOM、BASELINE、TOP
   */
  constructor(options = {}) {
    super(options.id, options.name)

    this._position = options.position
    this._entity.position = options.position
    this._backgroundColor = options.backgroundColor
    this._backgroundPadding = options.backgroundPadding
    this._eyeOffset = options.eyeOffset
    this._fillColor = options.fillColor
    this._font = options.font
    this._heightReference = options.heightReference
    this._horizontalOrigin = options.horizontalOrigin
    this._outlineColor = options.outlineColor
    this._outlineWidth = options.outlineWidth
    this._pixelSize = options.pixelSize
    this._pixelOffset = options.pixelOffset
    this._scale = options.scale
    this._scaleByDistance = options.scaleByDistance
    this._show = options.show
    this._showBackground = options.showBackground
    this._style = options.style
    this._text = options.text
    this._verticalOrigin = options.verticalOrigin

    this._entity.label = new Cesium.LabelGraphics({
      position: this._position,
      backgroundColor: this._backgroundColor,
      backgroundPadding: this._backgroundPadding,
      eyeOffset: this._eyeOffset,
      pixelOffset: this._pixelOffset,
      fillColor: this._fillColor,
      font: this._font,
      heightReference: this._heightReference,
      horizontalOrigin: this._horizontalOrigin,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      pixelSize: this._pixelSize,
      scale: this._scale,
      scaleByDistance: this._scaleByDistance,
      show: this._show,
      showBackground: this._showBackground,
      style: this._style,
      text: this._text,
      verticalOrigin: this._verticalOrigin
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

  get backgroundColor() {
    return this._backgroundColor
  }

  set backgroundColor(value) {
    this._backgroundColor = value
    this._entity.label.backgroundColor = value
  }

  get backgroundPadding() {
    return this._backgroundPadding
  }

  set backgroundPadding(value) {
    this._backgroundPadding = value
    this._entity.label.backgroundPadding = value
  }

  get eyeOffset() {
    return this._eyeOffset
  }

  set eyeOffset(value) {
    this._eyeOffset = value
    this._entity.label.eyeOffset = value
  }

  get pixelOffset() {
    return this._pixelOffset
  }

  set pixelOffset(value) {
    this._pixelOffset = value
    this._entity.label.pixelOffset = value
  }

  get fillColor() {
    return this._fillColor
  }

  set fillColor(value) {
    this._fillColor = value
    this._entity.label.fillColor = value
  }

  get font() {
    return this._font
  }

  set font(value) {
    this._font = value
    this._entity.label.font = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.label.heightReference = value
  }

  get horizontalOrigin() {
    return this._horizontalOrigin
  }

  set horizontalOrigin(value) {
    this._horizontalOrigin = value
    this._entity.label.horizontalOrigin = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._houtlineColor = value
    this._entity.label.outlineColor = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.label.outlineWidth = value
  }

  get pixelSize() {
    return this._pixelSize
  }

  set pixelSize(value) {
    this._pixelSize = value
    this._entity.label.pixelSize = value
  }

  get scale() {
    return this._scale
  }

  set scale(value) {
    this._scale = value
    this._entity.label.scale = value
  }

  get scaleByDistance() {
    return this._scaleByDistance
  }

  set scaleByDistance(value) {
    this._scaleByDistance = value
    this._entity.label.scaleByDistance = value
  }

  get show() {
    return this._show
  }

  set show(value) {
    this._show = value
    this._entity.label.show = value
  }

  get showBackground() {
    return this._showBackground
  }

  set showBackground(value) {
    this._showBackground = value
    this._entity.label.showBackground = value
  }

  get style() {
    return this._style
  }

  set style(value) {
    this._style = value
    this._entity.label.style = value
  }

  get text() {
    return this._text
  }

  set text(value) {
    this._text = value
    this._entity.label.text = value
  }

  get verticalOrigin() {
    return this._verticalOrigin
  }

  set verticalOrigin(value) {
    this._verticalOrigin = value
    this._entity.label.verticalOrigin = value
  }
}
