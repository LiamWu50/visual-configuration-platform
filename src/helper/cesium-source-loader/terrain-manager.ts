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
  private _viewer: Cesium.Viewer
  private _terrainProvider: TerrainProvider
  private _visible: boolean
  private _options: any

  constructor(viewer: Cesium.Viewer) {
    this._viewer = viewer
    this._terrainProvider = ellipsoidTerrainProvider()
    this._visible = false
    this._options = null
  }

  get add() {
    return this._add
  }

  get show() {
    return this._show
  }

  get delete() {
    return this._delete
  }

  /**
   * 加载地形数据
   * @param {String} url
   * @param {Object} options
   */
  _add(url: string, options: any = {}) {
    const type = Cesium.defaultValue(
      options.terrainType,
      TerrainType.ellipsoidTerrain
    )

    if (type === TerrainType.ellipsoidTerrain) {
      this._terrainProvider = ellipsoidTerrainProvider()
    } else if (type === TerrainType.cesiumTerrain) {
      this._terrainProvider = cesiumTerrainProvider(url, options)
    } else if (type === TerrainType.worldTerrain) {
      this._terrainProvider = worldTerrain(options)
    }

    this._viewer.terrainProvider = this._terrainProvider

    this._viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(116.6749, 40.7731, 5000)
    })

    this._options = options
  }

  /**
   *  切换地形隐藏与显示
   * @param {Boolean} value
   */
  _show(value: boolean) {
    if (value !== this._visible) {
      const emptyTerrain = new Cesium.EllipsoidTerrainProvider()
      this._viewer.terrainProvider = value
        ? this._terrainProvider
        : emptyTerrain
      this._visible = value
    }
  }

  /**
   * 删除地形服务
   */
  private _delete() {
    const emptyTerrain = new Cesium.EllipsoidTerrainProvider()
    this._viewer.terrainProvider = emptyTerrain
  }
}
