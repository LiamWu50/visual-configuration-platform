import * as Cesium from 'cesium'

export default class TilesetLayerManager {
  private _viewer: Cesium.Viewer
  private _dataSource: Map<string, Cesium.Cesium3DTileset>
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
   * 加载3dtiles模型
   * @param url String
   * @param options Object
   */
  private _add(url: string, options: any) {
    const tileset = new Cesium.Cesium3DTileset({
      url,
      maximumMemoryUsage: options.maximumMemoryUsage || 128,
      maximumScreenSpaceError: options.maximumScreenSpaceError || 64
    })
    this._viewer.scene.primitives.add(tileset)

    tileset.readyPromise
      .then(() => {
        this._dataSource.set(options.id, tileset)
        this._options.set(options.id, options)
        this._viewer.flyTo(tileset)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  /**
   * 通过ID获取模型
   * @param id String
   * @returns Cesium.Cesium3DTileset
   */
  private _getTilesetById(id: string) {
    return this._dataSource.get(id)
  }

  /**
   * 删除3dtiles模型
   * @param id string
   */
  private _delete(id: string) {
    const tileset = this._getTilesetById(id)
    if (!tileset) return
    this._viewer.scene.primitives.remove(tileset as Cesium.Cesium3DTileset)
    this._options.delete(id)
  }

  /**
   * 设置3dtiles模型的可见性
   * @param id String
   * @param visible Boolean
   */
  private _setVisibleById(id: string, visible: boolean) {
    const tileset = this._getTilesetById(id)
    if (!tileset) return
    tileset!.show = visible
  }

  /**
   * 飞行到3dtiles模型
   * @param id string
   */
  private _flyTo(id: string) {
    const tileset = this._getTilesetById(id)
    if (!tileset) return
    this._viewer.flyTo(tileset)
  }
}
