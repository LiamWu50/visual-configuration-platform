import * as Cesium from 'cesium'

import { TerrainType } from '@/common/map-base'
import { MapSourceType } from '@/common/map-base'

interface WorldTerrainOptions {
  requestVertexNormals?: boolean
  requestWaterMask?: boolean
}

type TerrainProvider =
  | Cesium.EllipsoidTerrainProvider
  | Cesium.CesiumTerrainProvider

/**
 * 无地形
 */
function ellipsoidTerrainProvider(): Cesium.EllipsoidTerrainProvider {
  return new Cesium.EllipsoidTerrainProvider()
}

/**
 * 创建自定义地形
 */
async function cesiumTerrainProvider(
  url: string,
  options: any
): Promise<Cesium.CesiumTerrainProvider> {
  return await Cesium.CesiumTerrainProvider.fromUrl(url, {
    requestVertexNormals: options.requestVertexNormals
  })
}

/**
 * 创建Cesium自带地形
 */
async function worldTerrain(
  options?: WorldTerrainOptions
): Promise<Cesium.CesiumTerrainProvider> {
  return await Cesium.createWorldTerrainAsync({
    requestVertexNormals: options?.requestVertexNormals,
    requestWaterMask: options?.requestWaterMask
  })
}

/**
 * 地形加载工具
 */
export default class TerrainManager {
  private viewer: Cesium.Viewer
  private terrainProvider: TerrainProvider
  private visible: boolean
  private options: Map<string, any>

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.terrainProvider = ellipsoidTerrainProvider()
    this.visible = false
    this.options = new Map()
  }

  /**
   * 加载地形数据
   * @param {Object} options
   */
  public async add(options: any = {}) {
    const type = Cesium.defaultValue(
      options.terrainType,
      TerrainType.ellipsoidTerrain
    )

    if (type === TerrainType.ellipsoidTerrain) {
      this.terrainProvider = ellipsoidTerrainProvider()
    } else if (type === TerrainType.cesiumTerrain) {
      this.terrainProvider = await cesiumTerrainProvider(options.url, options)
    } else if (type === TerrainType.worldTerrain) {
      this.terrainProvider = await worldTerrain(options)
    }

    this.viewer.terrainProvider = this.terrainProvider
    this.options.set(options.id, options)
  }

  /**
   *  切换地形隐藏与显示
   * @param {Boolean} value
   */
  public show(value: boolean) {
    if (value !== this.visible) {
      const emptyTerrain = new Cesium.EllipsoidTerrainProvider()
      this.viewer.terrainProvider = value ? this.terrainProvider : emptyTerrain
      this.visible = value
    }
  }

  /**
   * 删除地形服务
   */
  public delete() {
    const emptyTerrain = new Cesium.EllipsoidTerrainProvider()
    this.viewer.terrainProvider = emptyTerrain
  }

  /**
   * 飞行到地形
   */
  public flyTo() {
    return
  }

  /**
   * 获取加载的地形数据
   */
  public getLoadedSource() {
    return {
      type: MapSourceType.TERRAIN_SERVICE,
      value: Object.fromEntries(this.options)
    }
  }
}
