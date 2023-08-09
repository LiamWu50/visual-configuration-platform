import * as Cesium from 'cesium'

export default class FeatureLayerManager {
  private _viewer: Cesium.Viewer
  private _dataSource: Map<string, Cesium.GeoJsonDataSource>
  private _options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this._viewer = viewer
    this._dataSource = new Map() // 存储地图数据实例
    this._options = new Map() // 存储地图数据配置项
  }

  get add() {
    return this._add
  }

  get delete() {
    return this._delete
  }

  get setVisibleById() {
    return this._setVisibleById
  }

  get flyTo() {
    return this._flyTo
  }

  /**
   * 加载矢量数据
   * @param url String
   * @param options Object
   */
  private async _add(url: string, options: any) {
    const style = options.feature
    const layer = await Cesium.GeoJsonDataSource.load(url, {
      stroke: style.stroke || Cesium.Color.HOTPINK,
      strokeWidth: style.strokeWidth || 3,
      fill: Cesium.Color.fromCssColorString(style.fill) || Cesium.Color.PINK,
      markerColor:
        Cesium.Color.fromCssColorString(style.markerColor) || Cesium.Color.PINK,
      clampToGround: style.clampToGround || true
    })
    this._viewer.dataSources.add(layer)
    this._dataSource.set(options.id, layer)
    this._viewer.flyTo(layer)
  }

  /**
   * 通过ID获取矢量要素
   * @param id String
   * @returns Cesium.GeoJsonDataSource
   */
  private _getLayerById(id: string) {
    return this._dataSource.get(id)
  }

  /**
   * 删除矢量数据
   * @param id string
   */
  private _delete(id: string) {
    const layer = this._getLayerById(id)
    if (!layer) return
    this._viewer.dataSources.remove(layer as Cesium.GeoJsonDataSource)
    this._options.delete(id)
  }

  /**
   * 设置矢量数据的可见性
   * @param id String
   * @param visible Boolean
   */
  private _setVisibleById(id: string, visible: boolean) {
    const layer = this._getLayerById(id)
    if (layer) layer.show = visible
  }

  /**
   * 飞行到矢量图层
   * @param id string
   */
  private _flyTo(id: string) {
    const layer = this._getLayerById(id)
    if (layer) this._viewer.flyTo(layer)
  }
}
