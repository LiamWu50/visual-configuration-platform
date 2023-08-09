import * as Cesium from 'cesium'

interface options {
  id?: string
  name?: string
  show?: boolean
}

export default class ImageryLayer {
  private _url: string
  private _id: string | undefined
  private _name: string | undefined
  private _show: boolean
  private _layer: any
  private _alpha: number
  private _brightness: number
  private _contrast: number
  private _hue: number
  private _saturation: number
  private _gamma: number

  constructor(url: string, options: options = {}) {
    this._url = url
    this._id = Cesium.defined(options.id) ? options.id : Cesium.createGuid()
    this._name = options.name
    // this._zIndex = Cesium(options.zIndex) ? Number(options.zIndex) : undefined
    this._show = Cesium.defaultValue(options.show, true)
    /**
     * 影像图层对象
     * @private
     */
    this._layer = undefined
    /**
     * 透明度
     * @private
     */
    this._alpha = 1.0
    /**
     * 亮度
     * @private
     */
    this._brightness = 1.0
    /**
     * 对比度
     * @private
     */
    this._contrast = 1.0
    /**
     * 色调
     * @private
     */
    this._hue = 1.0
    /**
     * 饱和度
     * @private
     */
    this._saturation = 1.0
    /**
     * 灰度系数
     * @private
     */
    this._gamma = 1.0
  }

  get layer() {
    return this._layer
  }

  set layer(val) {
    this._layer = val
  }

  /**
   * 图像图层对象的id
   * @type {String}
   * @memberof ImageryLayer.prototype
   * @readonly
   */
  get id() {
    return this._id
  }

  /**
   * 图像图层对象的名称
   * @memberof ImageryLayer.prototype
   * @type {String}
   */
  get name() {
    return this._name
  }
  set name(value) {
    if (value != this._name) {
      this._layer.name = value
      this._name = value
    }
  }

  /**
   * 图像图层对象的url
   * @memberof ImageryLayer.prototype
   * @type {String}
   * @readonly
   */
  get url() {
    return this._url
  }

  /**
   * 图像图层对象的显隐状况
   * @memberof ImageryLayer.prototype
   * @type {Boolean}
   */
  get show() {
    return this._show
  }
  set show(value) {
    value = Boolean(value)
    if (value != this._show) {
      this._layer.show = value
      this._show = value
    }
  }

  /**
   * 透明度
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */
  get alpha() {
    return this._alpha
  }
  set alpha(value) {
    this._alpha = value
    if (this._layer) this._layer.alpha = this._alpha
  }

  /**
   * 亮度
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */
  get brightness() {
    return this._brightness
  }
  set brightness(value) {
    this._brightness = value
    if (this._layer) this._layer.brightness = this._brightness
  }

  /**
   * 对比度
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */
  get contrast() {
    return this._contrast
  }
  set contrast(value) {
    this._contrast = value
    if (this._layer) this._layer.contrast = this._contrast
  }

  /**
   * 色调
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */
  get hue() {
    return this._hue
  }

  set hue(value) {
    this._hue = value
    if (this._layer) this._layer.hue = this._hue
  }

  /**
   * 饱和度
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */

  get saturation() {
    return this._saturation
  }
  set saturation(value) {
    this._saturation = value
    if (this._layer) this._layer.saturation = this._saturation
  }

  /**
   * 灰度系数或伽马值
   * @memberof ImageryLayer.prototype
   * @type {Number}
   */
  get gamma() {
    return this._gamma
  }

  set gamma(value) {
    this._gamma = value
    if (this._layer) this._layer.gamma = this._gamma
  }
}
