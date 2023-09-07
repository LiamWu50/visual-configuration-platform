import * as Cesium from 'cesium'

import { MapSourceType } from '@/common/map-base'

export default class TilesetLayerManager {
  private viewer: Cesium.Viewer
  private dataSource: Map<string, Cesium.Cesium3DTileset>
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.dataSource = new Map()
    this.options = new Map()
  }

  /**
   * 加载3dtiles模型
   * @param options Object
   */
  public add(options: any) {
    const tileset = new Cesium.Cesium3DTileset({
      url: options.url,
      maximumMemoryUsage: options.maximumMemoryUsage || 128,
      maximumScreenSpaceError: options.maximumScreenSpaceError || 64
    })
    this.viewer.scene.primitives.add(tileset)

    tileset.readyPromise
      .then(() => {
        this.dataSource.set(options.id, tileset)
        this.options.set(options.id, options)
        this.viewer.flyTo(tileset)
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
  public getTilesetById(id: string) {
    return this.dataSource.get(id)
  }

  /**
   * 删除3dtiles模型
   * @param id string
   */
  public delete(id: string) {
    const tileset = this.getTilesetById(id)
    if (!tileset) return
    this.viewer.scene.primitives.remove(tileset as Cesium.Cesium3DTileset)
    this.options.delete(id)
  }

  /**
   * 设置3dtiles模型的可见性
   * @param id String
   * @param visible Boolean
   */
  public setVisibleById(id: string, visible: boolean) {
    const tileset = this.getTilesetById(id)
    if (!tileset) return
    tileset!.show = visible
  }

  /**
   * 飞行到3dtiles模型
   * @param id string
   */
  public flyTo(id: string) {
    const tileset = this.getTilesetById(id)
    if (!tileset) return
    this.viewer.flyTo(tileset)
  }

  /**
   * 获取加载的资源
   */
  public getLoadedSource() {
    return {
      type: MapSourceType.TILE_SET,
      value: Object.fromEntries(this.options)
    }
  }
}
