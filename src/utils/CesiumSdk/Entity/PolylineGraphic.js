import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class PolylineGraphic extends Graphics {
  /**
   * 线要素
   * @param {Object} [options={}] 可选项
   * @param {Cesium.Cartesian3[]} [options.positions] 线坐标
   * @param {Boolean} [options.arcType]  线段连接类型 GEODESIC、RHUMB、NONE
   * @param {Boolean} [options.clampToGround]  指定线段是否应该固定在地面
   * @param {Cesium.ClassificationType} [options.classificationType] 指定此折线在地面上时将对地形、3D贴图或两者进行分类  TERRAIN、CESIUM_3D_TILE、BOTH
   * @param {Cesium.Math.RADIANS_PER_DEGREE} [options.granularity]  指定每个纬度和经度之间的角距离
   * @param {Cesium.material} [options.material] 线贴图
   * @param {Cesium.Cartesian3[]} [options.positions] 线段位置
   * @param {Number} [options.width] 线段宽度
   * @param {Number} [options.zIndex] 显示层级
   * @param {Boolean} [options.show]  是否显示
   */
  constructor(options = {}) {
    super(options.id, options.name)

    this._arcType = options.arcType
    this._clampToGround = options.clampToGround
    this._classificationType = options.classificationType
    this._granularity = options.granularity
    this._material = options.material
    this._positions = options.positions
    this._entity.positions = options.positions
    this._width = options.width
    this._show = options.show

    this._entity.polyline = new Cesium.PolylineGraphics({
      positions: this._positions,
      arcType: this._arcType,
      clampToGround: this._clampToGround,
      classificationType: this._classificationType,
      // granularity: this._granularity,
      material: this._material,
      width: this._width,
      show: this._show
    })
  }

  get entity() {
    return this._entity
  }

  get arcType() {
    return this._arcType
  }

  set arcType(val) {
    this._arcType = val
  }

  get positions() {
    return this._positions
  }

  set positions(value) {
    this._entity.polyline.positions = value
    this._positions = value
  }

  get clampToGround() {
    return this._clampToGround
  }

  set clampToGround(value) {
    this._clampToGround = value
    this._entity.polyline.clampToGround = value
  }

  get classificationType() {
    return this._classificationType
  }

  set classificationType(value) {
    this._classificationType = value
    this._entity.polyline.classificationType = value
  }

  // get granularity() {
  //   return this._granularity
  // }

  // set granularity(value) {
  //   this._granularity = value
  //   this._entity.polyline.granularity = value
  // }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.polyline.material = value
  }

  get width() {
    return this._width
  }

  set width(value) {
    this._width = value
    this._entity.polyline.width = value
  }

  get show() {
    return this._show
  }

  set show(value) {
    this._show = value
    this._entity.polyline.show = value
  }
}
