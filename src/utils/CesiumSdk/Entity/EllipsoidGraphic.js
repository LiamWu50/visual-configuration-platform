import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class EllipsoidGraphic extends Graphics {
  /**
   * 球要素
   * @param {String} [options.id] 球要素id，可选项
   * @param {String} [options.name] 球要素name，可选项
   * @param {Cesium.Cartesian3} [options.position] 球的位置
   * @param {Cesium.Cartesian3} [options.radii] 半径数值
   * @param {Boolean} [options.show] 是否显示，可选项
   * @param {Boolean} [options.fill] 是否填充，可选项
   * @param {Number} [options.heightReference] 多边形的恒定高度，可选项
   * @param {Boolean} [options.outline] 是否显示边线，
   * @param {Cesium.Color} [options.outlineColor] 边框线颜色，
   * @param {Number} [options.outlineWidth] 边框线宽度
   * @param {Cesium.Material} [options.material] 球的填充样式
   * @param {Cesium.HeightReference} [options.heightReference=NONE] 高度属性
   */

  constructor(options) {
    super(options.id, options.name)

    this._radii = options.radii
    this._position = options.position
    this._fill = options.fill
    this._heightReference = options.heightReference
    this._outline = options.outline
    this._outlineColor = options.outlineColor
    this._outlineWidth = options.outlineWidth
    this._material = options.material
    this._show = options.show

    this._entity.ellipsoid = new Cesium.EllipseGraphics({
      radii: this._radii,
      position: this._position,
      fill: this._fill,
      heightReference: this._heightReference,
      outline: this._outline,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      material: this._material,
      show: this._show
    })
    this._entity.ellipsoid.radii = this._radii
  }

  get entity() {
    return this._entity
  }

  get position() {
    return this._position
  }

  set position(value) {
    this._position = value
    this._entity.position = value
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this._entity.ellipsoid.fill = value
  }

  get radii() {
    return this._radii
  }

  set radii(value) {
    this._radii = value
    this._entity.ellipsoid.radii = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.ellipsoid.height = value
  }

  get outline() {
    return this._outline
  }

  set outline(value) {
    this._outline = value
    this._entity.ellipsoid.outline = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._outlineColor = value
    this._entity.ellipsoid.outlineColor = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.ellipsoid.outlineWidth = value
  }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.ellipsoid.material = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.ellipsoid.heightReference = value
  }
}
