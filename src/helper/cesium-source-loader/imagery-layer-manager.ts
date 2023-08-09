import * as Cesium from 'cesium'

import { ImagerProviderType } from '@/common/map-scene-config'

import ImageryProvider from './imagery-provider'

export default class ImageryLayerManager {
  private _viewer: Cesium.Viewer
  private _dataSource: Map<string, Cesium.ImageryLayer>
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
   * 加载影像服务
   * @param url String
   * @param options Object
   */
  private _add(url: string, options: any) {
    if (!options.imageryType) {
      throw new Error('未选择影像服务类型！')
    }
    const type: keyof typeof ImagerProviderType = options.imageryType
    const typeHandler = ImageryProvider[type]
    const layer = new Cesium.ImageryLayer(typeHandler(url, options))

    console.log('layer', layer)

    this._viewer.imageryLayers.add(layer)
    this._dataSource.set(options.id, layer)
    this._options.set(options.id, options)
    this._viewer.flyTo(layer)
  }

  /**
   * 通过ID获取影像图层
   * @param id String
   * @returns Cesium.ImageryLayer
   */
  private _getLayerById(id: string) {
    return this._dataSource.get(id)
  }

  /**
   * 删除影像服务
   * @param id string
   */
  private _delete(id: string) {
    const layer = this._getLayerById(id)
    if (!layer) return
    this._viewer.imageryLayers.remove(layer as Cesium.ImageryLayer)
    this._options.delete(id)
    window.$message.success('影像服务删除成功！')
  }

  /**
   * 设置影像服务的可见性
   * @param id String
   * @param visible Boolean
   */
  private _setVisibleById(id: string, visible: boolean) {
    const layer = this._getLayerById(id)
    if (layer) layer.show = visible
  }

  /**
   * 飞行到影像图层
   * @param id string
   */
  private _flyTo(id: string) {
    const layer = this._getLayerById(id)
    if (layer) this._viewer.flyTo(layer)
  }
}
