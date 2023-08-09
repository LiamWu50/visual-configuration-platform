import * as Cesium from 'cesium/Cesium.js'

export default class PolylineStyle {
  /**
   * 构造函数
   * @param {Object} [options={}] 可选项
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
    this._arcType = Cesium.defaultValue(options.arcType, Cesium.ArcType.GEODESIC)
    this._positions = options.positions
    this._clampToGround = Cesium.defaultValue(options.clampToGround, true)
    this._classificationType = Cesium.defaultValue(options.classificationType, Cesium.ClassificationType.BOTH)
    // this._granularity = Cesium.defaultValue(options.granularity, Cesium.Math.RADIANS_PER_DEGREE)
    this._material = Cesium.defaultValue(
      options.material,
      new Cesium.PolylineOutlineMaterialProperty({
        color: Cesium.Color.fromBytes(0, 255, 255, 200),
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2
      })
    )
    this._width = Cesium.defaultValue(options.width, 5)
    this._show = Cesium.defaultValue(options.show, true)
  }

  get positions() {
    return this._positions
  }

  set positions(value) {
    this._positions = value
  }

  get arcType() {
    return this._arcType
  }

  get clampToGround() {
    return this._clampToGround
  }

  get classificationType() {
    return this._classificationType
  }

  //   get granularity() {
  //     return this._granularity
  //   }

  get material() {
    return this._material
  }

  get width() {
    return this._width
  }

  get show() {
    return this._show
  }
}
