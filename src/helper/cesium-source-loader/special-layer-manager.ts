import axios from 'axios'
import * as Cesium from 'cesium'

import utils from '@/utils'

export default class SpecialLayerManager {
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
   * 加载专题数据
   * @param url String
   * @param options Object
   */
  private async _add(url: string, options: any) {
    // const style = options.feature
    const features = await this._getFeatures(url)
    console.log(features)
    const primitive = this._createPrimitive(features, options)

    this._viewer.scene.primitives.add(primitive)
    // this._dataSource.set(options.id, layer)
    // this._viewer.flyTo(layer)
  }

  /**
   * 获取专题数据的features
   * @param url String
   */
  private async _getFeatures(url: string) {
    try {
      const res = await axios.get(url)
      return res?.data?.features || []
    } catch (err) {
      console.log(err)
    }
  }

  private _createPrimitive(features: any[], options: any) {
    const billboards = new Cesium.BillboardCollection()

    features.forEach((f) => {
      const coordinate: [number, number] = f.geometry.coordinates
      const image = utils.imageOverlayText(
        options.special.icon,
        options.special.text
      )
      billboards.add({
        position: Cesium.Cartesian3.fromDegrees(...coordinate),
        image,
        scale: 0.6,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
        // width: options.special.size,
        // heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
      })
    })

    return billboards
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
