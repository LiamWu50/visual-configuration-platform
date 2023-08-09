import * as Cesium from 'cesium'
import { Viewer } from 'cesium'

import ImageryLayer from './ImageryLayer'
import ImageryProvider from './ImageryProvider'

type ImageryProviderType = {
  arcGisMapServer: Cesium.ArcGisMapServerImageryProvider
  bingMap: Cesium.BingMapsImageryProvider
  tileMapServer: Cesium.TileMapServiceImageryProvider
  mapBox: Cesium.MapboxImageryProvider
  singleTile: Cesium.SingleTileImageryProvider
  urlTemplate: Cesium.UrlTemplateImageryProvider
  webMapService: Cesium.WebMapServiceImageryProvider
  webMapTileService: Cesium.WebMapTileServiceImageryProvider
}

type LayerType = keyof ImageryProviderType

const imageryProviderType = {
  arcGisMapServer: ImageryProvider.ArcGisMapServerImageryProvider,
  bingMap: ImageryProvider.BingMapsImageryProvider,
  tileMapServer: ImageryProvider.TileMapServiceImageryProvider,
  mapBox: ImageryProvider.MapboxImageryProvider,
  singleTile: ImageryProvider.SingleTileImageryProvider,
  urlTemplate: ImageryProvider.UrlTemplateImageryProvider,
  webMapService: ImageryProvider.WebMapServiceImageryProvider,
  webMapTileService: ImageryProvider.WebMapTileServiceImageryProvider
}

function destroyLayer(viewer: Viewer, imageryLayer: ImageryLayer) {
  const layer = imageryLayer.layer
  if (layer) {
    const _viewerLayers = viewer.imageryLayers
    _viewerLayers.remove(layer, true)
    imageryLayer.layer = undefined
  }
}

export default class ImageryLayerCollection {
  private _viewer: Viewer
  private _layers: ImageryLayer[]

  constructor(viewer: Viewer) {
    this._viewer = viewer
    this._layers = []
  }

  /**
   * 添加影像图层
   * @param {String} url 服务地址
   * @param {Number} [layerType] 服务类型
   * @param {Object} options 服务参数
   * @return {ImageryLayer}
   */
  add(url: string, layerType: LayerType, options = {}) {
    const typeHandler = imageryProviderType[layerType]
    const imageryProvider = typeHandler(url, options)
    const imageryLayer = new ImageryLayer(url, options)
    imageryLayer.layer = imageryProvider
    this._viewer.imageryLayers.addImageryProvider(imageryProvider)
    this._layers.push(imageryLayer)

    return imageryLayer
  }

  /**
   * 移除图层
   * @param {ImageryLayer} layer 需要移除的图层对象
   */
  remove(layer: ImageryLayer) {
    const index = this._layers.findIndex((i) => i === layer)
    this._layers.splice(index, 1)
    destroyLayer(this._viewer, layer)
  }

  /**
   * 移除所有图层
   */
  removeAll() {
    for (let i = 0; i < this._layers.length; i++) {
      const layer = this._layers.pop()
      if (layer) destroyLayer(this._viewer, layer)
    }
  }

  /**
   * 根据图层id获取图层
   * @param {String} layerId 图层id
   * @return {ImageryLayer|undefined} 返回获取到的图层，若没获取到则返回undefined
   */
  getById(layerId: string) {
    const layer = this._layers.find((l) => l.id == layerId)
    return layer
  }

  /**
   * 判断集合中是否存在指定的图层对象
   * @param {ImageryLayer} layer 图层对象
   * @return {Boolean} 存在返回true，不存在返回false
   */
  contain(layer: ImageryLayer) {
    const index = this._layers.findIndex((i) => i === layer)
    return index === -1 ? false : true
  }

  /**
   * 图层集合对象
   * @memberof ImageryLayerCollection
   * @type {ImageryLayer[]}
   * @readonly
   */
  get layers() {
    return this._layers
  }
}
