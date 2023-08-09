import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class PolylineVolumeGraphic extends Graphics {
  /**
   * 面要素
   * @param {Cesium.Cartesian3} [options.positions] 面坐标
   * @param {Array<Cartesian2>} [options.shape] 形状
   * @param {Cesium.cornerType} cornerType 转角样式
   * @param {String} [options.id] 管道要素id，可选项
   * @param {String} [options.name] 管道要素name，可选项
   * @param {Boolean} [options.fill] 管道是否填充，可选项
   * @param {Cesium.Material} [options.material] 面的填充样式
   */
  constructor(options = {}) {
    super(options.id, options.name)

    this._positions = options.positions
    this._fill = Cesium.defaultValue(options.fill, true)

    this._shape = Cesium.defaultValue(options.shape, [])
    this._cornerType = Cesium.defaultValue(options.cornerType, Cesium.CornerType.ROUNDED)
    this._material = Cesium.defaultValue(options.material, Cesium.Color.fromBytes(0, 255, 255, 80))

    options.fill = this._fill
    options.material = this._material
    options.heightReference = this._heightReference
    this._entity.polylineVolume = new Cesium.PolylineVolumeGraphics(options)
  }

  get entity() {
    return this._entity
  }

  get positions() {
    return this._positions
  }

  set positions(value) {
    this._entity.polylineVolume.positions = value
    this._positions = value
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this._entity.polylineVolume.fill = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.polylineVolume.height = value
  }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.polylineVolume.material = value
  }

  get shadows() {
    return this._shadows
  }

  set shadows(value) {
    this._shadows = value
    this._entity.polylineVolume.shadows = value
  }
}
