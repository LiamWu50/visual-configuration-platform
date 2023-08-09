import * as Cesium from 'cesium'

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
  return new Cesium.createWorldTerrain({
    requestVertexNormals: options?.requestVertexNormals,
    requestWaterMask: options?.requestWaterMask
  })
}

/**
 * 地形加载工具
 */
export default class Terrain {
  private _viewer: Cesium.Viewer
  private _terrainProvider: TerrainProvider
  private _visible: boolean

  constructor(viewer: Cesium.Viewer) {
    this._viewer = viewer
    this._terrainProvider = ellipsoidTerrainProvider()
    this._visible = false
  }

  get load() {
    return this._load
  }

  get show() {
    return this._show
  }

  /**
   * 加载地形数据
   * @param {String} url
   * @param {String} type
   * @param {Object} options
   */
  _load(url: string, type: string, options: any = {}) {
    if (type === 'ellipsoidTerrain' && !url)
      throw new Error('缺少地形服务地址！')

    type = Cesium.defaultValue(type, 'ellipsoidTerrain')

    if (type === 'ellipsoidTerrain') {
      this._terrainProvider = ellipsoidTerrainProvider()
    } else if (type === 'cesiumTerrain') {
      this._terrainProvider = cesiumTerrainProvider(url, options)
    } else if (type === 'worldTerrain') {
      this._terrainProvider = worldTerrain(options)
    }
    this._viewer.terrainProvider = this._terrainProvider
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
}
