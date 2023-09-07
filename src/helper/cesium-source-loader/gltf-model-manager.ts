import * as Cesium from 'cesium'

import { MapSourceType } from '@/common/map-base'

export default class GltfModelManager {
  private viewer: Cesium.Viewer
  private dataSource: Map<string, Cesium.Model>
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.dataSource = new Map()
    this.options = new Map()
  }

  /**
   * 加载gltf模型
   * @param options Object
   */
  public add(options: any) {
    const { longitude, latitude, altitude } = options.position
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude)
    )
    const model = Cesium.Model.fromGltf({
      url: options.url,
      modelMatrix: modelMatrix,
      scale: options.scale || 100,
      heightReference: options.heightReference
    })

    this.viewer.scene.primitives.add(model)
    model.readyPromise
      .then(() => {
        this.dataSource.set(options.id, model)
        this.options.set(options.id, options)
        this.flyTo(options.id)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  /**
   * 通过ID获取模型
   * @param id String
   * @returns Cesium.Model
   */
  public getModelById(id: string) {
    return this.dataSource.get(id)
  }

  /**
   * 删除gltf模型
   * @param id string
   */
  public delete(id: string) {
    const model = this.getModelById(id)
    if (!model) return
    this.viewer.scene.primitives.remove(model as Cesium.Model)
    this.options.delete(id)
  }

  /**
   * 设置gltf模型的可见性
   * @param id String
   * @param visible Boolean
   */
  public setVisibleById(id: string, visible: boolean) {
    const model = this.getModelById(id)
    if (model) model.show = visible
  }

  /**
   * 飞行到gltf模型
   * @param id string
   */
  public flyTo(id: string) {
    const model = this.getModelById(id)
    if (!model) return
    const boundingSphere = model.boundingSphere
    this.viewer.camera.flyToBoundingSphere(boundingSphere)
  }

  /**
   * 获取加载的资源
   */
  public getLoadedSource() {
    return {
      type: MapSourceType.GLTF_MODEL,
      value: Object.fromEntries(this.options)
    }
  }
}
