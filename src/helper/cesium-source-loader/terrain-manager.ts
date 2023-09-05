import * as Cesium from 'cesium'

import { TerrainType } from '@/common/map-base'

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
function cesiumTerrainProvider(
  url: string,
  options: any
): Cesium.CesiumTerrainProvider {
  return new Cesium.CesiumTerrainProvider({
    url,
    requestVertexNormals: options.requestVertexNormals
  })
}

/**
 * 创建Cesium自带地形
 */
function worldTerrain(
  options?: WorldTerrainOptions
): Cesium.CesiumTerrainProvider {
  return Cesium.createWorldTerrain({
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
  private options: any

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.terrainProvider = ellipsoidTerrainProvider()
    this.visible = false
    this.options = null
  }

  /**
   * 加载地形数据
   * @param {String} url
   * @param {Object} options
   */
  public add(url: string, options: any = {}) {
    options.url = url
    const type = Cesium.defaultValue(
      options.terrainType,
      TerrainType.ellipsoidTerrain
    )

    if (type === TerrainType.ellipsoidTerrain) {
      this.terrainProvider = ellipsoidTerrainProvider()
    } else if (type === TerrainType.cesiumTerrain) {
      this.terrainProvider = cesiumTerrainProvider(url, options)
    } else if (type === TerrainType.worldTerrain) {
      this.terrainProvider = worldTerrain(options)
    }

    this.viewer.terrainProvider = this.terrainProvider

    this.options = options
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
   * 获取加载的矢量要素集合
   */
  public getLoadedSource() {
    return this.options
  }
}
