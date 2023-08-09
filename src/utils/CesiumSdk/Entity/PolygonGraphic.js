import * as Cesium from 'cesium/Cesium.js'
import Graphics from './Graphics'

export default class PolygonGraphic extends Graphics {
  /**
   * 面要素
   * @param {Object} [options={}] 可选项
   * @param {Boolean} [options.arcType]  线段连接类型 GEODESIC、RHUMB、NONE
   * @param {Boolean} [options.clampToGround]  指定线段是否应该固定在地面
   * @param {Cesium.ClassificationType} [options.classificationType] 指定此折线在地面上时将对地形、3D贴图或两者进行分类  TERRAIN、CESIUM_3D_TILE、BOTH
   * @param {} [options.extrudedHeight]  多边形拉伸高度
   * @param {Boolean} [options.fill] 是否填充
   * @param {Number} [options.height] 高度
   * @param {Cesium.HeightReference} [options.heightReference] 离地类型 NONE、CLAMP_TO_GROUND、RELATIVE_TO_GROUND
   * @param {Cesium.PolygonHierarchy} [options.hierarchy] 定义多边形及其孔的线性环的层次结构
   * @param {Cesium.material} [options.material] 线贴图
   * @param {Boolean} [options.outline] 边框线
   * @param {Cesium.Color}[options.outlineColor] 边框线颜色
   * @param {Number}[options.outlineWidth] 边框线宽度
   * @param {Cesium.Cartesian3[]} [options.positions] 线段位置
   * @param {Boolean} [options.show]  是否显示
   */
  constructor(options = {}) {
    super(options.id, options.name)

    this._hierarchy = options.hierarchy
    this._arcType = options.arcType
    this._clampToGround = options.clampToGround
    this._classificationType = options.classificationType
    this._extrudedHeight = options.clampToGround ? undefined : options.extrudedHeight
    this._fill = options.fill
    this._height = options.clampToGround ? undefined : options.height
    this._heightReference = options.heightReference
    this._positions = options.positions
    this._outline = options.outline
    this._outlineColor = options.outlineColor
    this._outlineWidth = options.outlineWidth
    this._material = options.material
    this._show = options.show

    this._entity.polygon = new Cesium.PolygonGraphics({
      hierarchy: this._hierarchy,
      arcType: this._arcType,
      clampToGround: this._clampToGround,
      classificationType: this._hierarclassificationTypechy,
      extrudedHeight: this._extrudedHeight,
      fill: this._fill,
      height: this._height,
      heightReference: this._heightReference,
      positions: this._positions,
      outline: this._outline,
      outlineColor: this._outlineColor,
      outlineWidth: this._outlineWidth,
      material: this._material,
      show: this._show
    })

    //创建外边框
    this._entity.polyline = new Cesium.PolylineGraphics({
      positions: this._positions,
      width: this._outlineWidth,
      material: this._outlineColor,
      clampToGround: this._clampToGround
    })
  }

  get entity() {
    return this._entity
  }

  get hierarchy() {
    return this._hierarchy
  }

  set hierarchy(value) {
    this._entity.polygon.hierarchy = value
    this._hierarchy = value
  }

  get arcType() {
    return this._arcType
  }

  set arcType(value) {
    this._entity.polygon.arcType = value
    this._arcType = value
  }

  get clampToGround() {
    return this._clampToGround
  }

  set clampToGround(value) {
    this._entity.polygon.clampToGround = value
    this._clampToGround = value
  }

  get classificationType() {
    return this._classificationType
  }

  set classificationType(value) {
    this._classificationType = value
    this._entity.polygon.classificationType = value
  }

  get extrudedHeight() {
    return this._extrudedHeight
  }

  set extrudedHeight(value) {
    this._extrudedHeight = value
    this._entity.polygon.extrudedHeight = value
  }

  get fill() {
    return this._fill
  }

  set fill(value) {
    this._fill = value
    this._entity.polygon.fill = value
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._entity.polygon.height = value
  }

  get heightReference() {
    return this._heightReference
  }

  set heightReference(value) {
    this._heightReference = value
    this._entity.polygon.heightReference = value
  }

  get positions() {
    return this._positions
  }

  set positions(value) {
    this._positions = value
    this._entity.polygon.positions = value
  }

  get outline() {
    return this._outline
  }

  set outline(value) {
    this._outline = value
    this._entity.polygon.outline = value
  }

  get outlineColor() {
    return this._outlineColor
  }

  set outlineColor(value) {
    this._outlineColor = value
    this._entity.polygon.outlineColor = value
  }

  get outlineWidth() {
    return this._outlineWidth
  }

  set outlineWidth(value) {
    this._outlineWidth = value
    this._entity.polygon.outlineWidth = value
  }

  get material() {
    return this._material
  }

  set material(value) {
    this._material = value
    this._entity.polygon.material = value
  }

  get show() {
    return this._show
  }

  set show(value) {
    this._show = value
    this._entity.polygon.show = value
  }
}
