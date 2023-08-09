import * as Cesium from 'cesium'

export default class GltfModelManager {
  private _viewer: Cesium.Viewer
  private _dataSource: Map<string, Cesium.Model>
  private _options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this._viewer = viewer
    this._dataSource = new Map()
    this._options = new Map()
  }

  get add() {
    return this._add
  }

  get delete() {
    return this._delete
  }

  get flyTo() {
    return this._flyTo
  }

  get setVisibleById() {
    return this._setVisibleById
  }

  /**
   * 加载gltf模型
   * @param url String
   * @param options Object
   */
  private _add(url: string, options: any) {
    const { longitude, latitude, altitude } = options.position
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees(longitude, latitude, 0)
    )
    const model = Cesium.Model.fromGltf({
      url,
      modelMatrix: modelMatrix,
      scale: options.scale || 100,
      heightReference: options.heightReference
    })

    this._viewer.scene.primitives.add(model)
    model.readyPromise
      .then(() => {
        this._dataSource.set(options.id, model)
        this._options.set(options.id, options)
        this._flyTo(options.id)
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
  private _getModelById(id: string) {
    return this._dataSource.get(id)
  }

  /**
   * 删除gltf模型
   * @param id string
   */
  private _delete(id: string) {
    const model = this._getModelById(id)
    if (!model) return
    this._viewer.scene.primitives.remove(model as Cesium.Model)
    this._options.delete(id)
  }

  /**
   * 设置gltf模型的可见性
   * @param id String
   * @param visible Boolean
   */
  private _setVisibleById(id: string, visible: boolean) {
    const model = this._getModelById(id)
    if (model) model.show = visible
  }

  /**
   * 飞行到gltf模型
   * @param id string
   */
  private _flyTo(id: string) {
    const model = this._getModelById(id)
    if (!model) return
    const boundingSphere = model.boundingSphere
    this._viewer.camera.flyToBoundingSphere(boundingSphere)
  }
}
