import * as Cesium from 'cesium/Cesium.js'

export default class LabelStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
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
   * @param {Cesium.Cartesian2}[options.pixelOffset] 标签位置偏移量
   * @param {Number} [options.scale] 缩放
   * @param {Cesium.NearFarScalar} [options.scaleByDistance] 距离缩放点的NearFarScalar属性
   * @param {Boolean} [options.show]  是否显示
   * @param {Boolean} [options.showBackground] 是否显示背景
   * @param {Cesium.LabelStyle} [options.style]  如何绘制标签 FILL、OUTLINE、FILL_AND_OUTLINE
   * @param {String} [options.text] 文本
   * @param {Cesium.VerticalOrigin} [options.verticalOrigin] 垂直原点的位置 CENTER、BOTTOM、BASELINE、TOP
   */
  constructor(options = {}) {
    this._id = options.id
    this._backgroundColor = Cesium.defaultValue(options.backgroundColor, new Cesium.Color(0.165, 0.165, 0.165, 0.8))
    this._backgroundPadding = Cesium.defaultValue(options.backgroundPadding, new Cesium.Cartesian2(7, 5))
    this._eyeOffset = Cesium.defaultValue(options.eyeOffset, new Cesium.Cartesian3(0, 0, -100))
    this._fillColor = Cesium.defaultValue(options.fillColor, new Cesium.Color.fromBytes(0, 255, 255, 250))
    this._font = Cesium.defaultValue(options.font, '18px sans-serif')
    this._heightReference = Cesium.defaultValue(options.heightReference, Cesium.HeightReference.CLAMP_TO_GROUND)
    this._horizontalOrigin = Cesium.defaultValue(options.horizontalOrigin, Cesium.HeightReference.CLAMP_TO_GROUND)
    this._outlineColor = Cesium.defaultValue(options.outlineColor, new Cesium.Color.fromBytes(0, 255, 255, 200))
    this._outlineWidth = Cesium.defaultValue(options.outlineWidth, 3)
    this._pixelSize = Cesium.defaultValue(options.pixelSize, 5)
    this._scale = Cesium.defaultValue(options.scale, 1)
    this._scaleByDistance = Cesium.defaultValue(options.scaleByDistance, null)
    this._pixelOffset = Cesium.defaultValue(options.pixelOffset, new Cesium.Cartesian2(0, 0))
    this._show = Cesium.defaultValue(options.show, true)
    this._showBackground = Cesium.defaultValue(options.showBackground, false)
    this._style = Cesium.defaultValue(options.style, false)
    this._text = Cesium.defaultValue(options.text, 'text')
    this._verticalOrigin = Cesium.defaultValue(options.verticalOrigin, Cesium.HeightReference.BOTTOM)
  }

  get id() {
    return this._id
  }

  get backgroundColor() {
    return this._backgroundColor
  }

  get backgroundPadding() {
    return this._backgroundPadding
  }

  get eyeOffset() {
    return this._eyeOffset
  }

  get pixelOffset() {
    return this._pixelOffset
  }

  get fillColor() {
    return this._fillColor
  }

  get font() {
    return this._font
  }

  get heightReference() {
    return this._heightReference
  }

  get horizontalOrigin() {
    return this._horizontalOrigin
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

  get scale() {
    return this._scale
  }

  get scaleByDistance() {
    return this._scaleByDistance
  }

  get show() {
    return this._show
  }

  get showBackground() {
    return this._showBackground
  }

  get style() {
    return this._style
  }

  get text() {
    return this._text
  }

  get verticalOrigin() {
    return this._verticalOrigin
  }
}
