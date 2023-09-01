import axios from 'axios'
import * as Cesium from 'cesium'

import utils from '@/utils'

export default class SpecialLayerManager {
  private viewer: Cesium.Viewer
  private dataSource: Map<string, Cesium.BillboardCollection>
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.dataSource = new Map() // 存储地图数据实例
    this.options = new Map() // 存储地图数据配置项
  }

  /**
   * 加载专题数据
   * @param url String
   * @param options Object
   */
  public async add(url: string, options: any) {
    options.url = options
    const features = await this.getFeatures(url)
    const collection = this.createCollectioon(features, options)

    this.viewer.scene.primitives.add(collection)
    this.dataSource.set(options.id, collection)
    this.options.set(options.id, options)
    this.flyTo(options.id)
  }

  /**
   * 获取专题数据的features
   * @param url String
   */
  public async getFeatures(url: string) {
    try {
      const res = await axios.get(url)
      return res?.data?.features || []
    } catch (err) {
      console.log(err)
    }
  }

  public createCollectioon(features: any[], options: any) {
    const billboards = new Cesium.BillboardCollection({
      scene: this.viewer.scene
    })

    features.forEach(async (f) => {
      const coordinate: [number, number] = f.geometry.coordinates
      const image = await utils.imageOverlayText(
        options.special.icon,
        f.properties[options.special.label]
      )

      billboards.add({
        position: Cesium.Cartesian3.fromDegrees(...coordinate),
        image,
        scale: 0.6,
        width: options.special.size,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
      })
    })

    return billboards
  }

  /**
   * 通过ID获取矢量要素集合
   * @param id String
   * @returns Cesium.BillboardCollection
   */
  public getLayerById(id: string) {
    return this.dataSource.get(id)
  }

  /**
   * 删除矢量要素集合
   * @param id string
   */
  public delete(id: string) {
    const layer = this.getLayerById(id)
    if (!layer) return
    this.viewer.scene.primitives.remove(layer)
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
   * 飞行到矢量要素集合
   * @param id string
   */
  public flyTo(id: string) {
    const layer = this.getLayerById(id) as any
    if (!layer) return
    const billboards = layer._billboards as Cesium.Billboard[]
    const cartesians = billboards.map((b) => b.position)
    const rectangle = Cesium.Rectangle.fromCartesianArray(cartesians)
    this.viewer.camera.flyTo({
      destination: rectangle
    })
  }

  /**
   * 获取加载的矢量要素集合
   */
  public getLoadedSource() {
    return this.options.values()
  }
}
