import * as Cesium from 'cesium'

export default class FeatureLayerManager {
  private viewer: Cesium.Viewer
  private dataSource: Map<string, Cesium.GeoJsonDataSource>
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.dataSource = new Map() // 存储地图数据实例
    this.options = new Map() // 存储地图数据配置项
  }

  /**
   * 加载矢量数据
   * @param url String
   * @param options Object
   */
  public async add(url: string, options: any) {
    options.url = options
    const style = options.feature

    const layer = await Cesium.GeoJsonDataSource.load(url, {
      stroke: style.stroke || Cesium.Color.HOTPINK,
      strokeWidth: style.strokeWidth || 3,
      fill:
        Cesium.Color.fromCssColorString(style.fill).withAlpha(0.6) ||
        Cesium.Color.PINK.withAlpha(0.6),
      markerColor:
        Cesium.Color.fromCssColorString(style.markerColor) || Cesium.Color.PINK,
      clampToGround: style.clampToGround || true
    })
    this.viewer.dataSources.add(layer)
    this.dataSource.set(options.id, layer)
    this.options.set(options.id, options)
    this.viewer.flyTo(layer)
  }

  /**
   * 通过ID获取矢量要素
   * @param id String
   * @returns Cesium.GeoJsonDataSource
   */
  public getLayerById(id: string) {
    return this.dataSource.get(id)
  }

  /**
   * 删除矢量数据
   * @param id string
   */
  public delete(id: string) {
    const layer = this.getLayerById(id)
    if (!layer) return
    this.viewer.dataSources.remove(layer as Cesium.GeoJsonDataSource)
    this.options.delete(id)
  }

  /**
   * 设置矢量数据的可见性
   * @param id String
   * @param visible Boolean
   */
  public setVisibleById(id: string, visible: boolean) {
    const layer = this.getLayerById(id)
    if (layer) layer.show = visible
  }

  /**
   * 飞行到矢量图层
   * @param id string
   */
  public flyTo(id: string) {
    const layer = this.getLayerById(id)
    if (layer) this.viewer.flyTo(layer)
  }

  /**
   * 获取加载的资源
   */
  public getLoadedSource() {
    return {
      type: 'feature',
      value: Object.fromEntries(this.options)
    }
  }
}
