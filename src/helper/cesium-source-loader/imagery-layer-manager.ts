import * as Cesium from 'cesium'

import { ImagerProviderType } from '@/common/map-base'

import ImageryProvider from './imagery-provider'

export default class ImageryLayerManager {
  private viewer: Cesium.Viewer
  private dataSource: Map<string, Cesium.ImageryLayer>
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.dataSource = new Map() // 存储地图数据实例
    this.options = new Map() // 存储地图数据配置项
  }

  /**
   * 加载影像服务
   * @param url String
   * @param options Object
   */
  public add(url: string, options: any) {
    if (!options.imageryType) {
      throw new Error('未选择影像服务类型！')
    }
    options.url = options
    const type: keyof typeof ImagerProviderType = options.imageryType
    const typeHandler = ImageryProvider[type]
    const layer = new Cesium.ImageryLayer(typeHandler(url, options))

    this.viewer.imageryLayers.add(layer)
    this.dataSource.set(options.id, layer)
    this.options.set(options.id, options)
    this.viewer.flyTo(layer)
  }

  /**
   * 通过ID获取影像图层
   * @param id String
   * @returns Cesium.ImageryLayer
   */
  public getLayerById(id: string) {
    return this.dataSource.get(id)
  }

  /**
   * 删除影像服务
   * @param id string
   */
  public delete(id: string) {
    const layer = this.getLayerById(id)
    if (!layer) return
    this.viewer.imageryLayers.remove(layer as Cesium.ImageryLayer)
    this.options.delete(id)
    window.$message.success('影像服务删除成功！')
  }

  /**
   * 设置影像服务的可见性
   * @param id String
   * @param visible Boolean
   */
  public setVisibleById(id: string, visible: boolean) {
    const layer = this.getLayerById(id)
    if (layer) layer.show = visible
  }

  /**
   * 飞行到影像图层
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
    return this.options
  }
}
