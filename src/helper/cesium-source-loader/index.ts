import * as Cesium from 'cesium'

import { MapSourceType, MapSourceTypeEnum } from '@/common/map-scene-config'

import FeatureLayerManager from './feature-layer-manager'
import GltfModelManager from './gltf-model-manager'
import ImageryLayerManager from './imagery-layer-manager'
import SpecialLayerManager from './special-layer-manager'
import TerrainManager from './terrain-manager'
import TilesetLayerManager from './tileset-layer-manager'

/**
 * Cesium相关资源加载工具
 */
export default class CesiumSourceLoader {
  private _imageryLayerManager: ImageryLayerManager
  private _tilesetLayerManager: TilesetLayerManager
  private _gltfModelManager: GltfModelManager
  private _terrainManager: TerrainManager
  private _featureLayerManager: FeatureLayerManager
  private _specialLayerManager: SpecialLayerManager

  constructor(viewer: Cesium.Viewer) {
    this._imageryLayerManager = new ImageryLayerManager(viewer)
    this._tilesetLayerManager = new TilesetLayerManager(viewer)
    this._gltfModelManager = new GltfModelManager(viewer)
    this._terrainManager = new TerrainManager(viewer)
    this._featureLayerManager = new FeatureLayerManager(viewer)
    this._specialLayerManager = new SpecialLayerManager(viewer)
  }

  get addSource() {
    return this._addSource
  }

  get deleteSource() {
    return this._deleteSource
  }

  get flyTo() {
    return this._flyTo
  }

  get _typeManager() {
    return {
      [MapSourceType.IMAGE_SERVICE]: this._imageryLayerManager,
      [MapSourceType.TERRAIN_SERVICE]: this._terrainManager,
      [MapSourceType.TILE_SET]: this._tilesetLayerManager,
      [MapSourceType.GLTF_MODEL]: this._gltfModelManager,
      [MapSourceType.FEATURE]: this._featureLayerManager,
      [MapSourceType.FEATURE]: this._featureLayerManager,
      [MapSourceType.SPECIAL_SUBJECT]: this._specialLayerManager
    }
  }

  /**
   * 加载地图资源
   * @param url String
   * @param type String
   * @param options Object
   */
  private _addSource(url: string, type: MapSourceTypeEnum, options: any) {
    const curManager = this._typeManager[type]
    curManager.add(url, options)
  }

  /**
   * 删除地图资源
   * @param id String
   * @param type String
   */
  private _deleteSource(id: string, type: string) {
    const curManager = this._typeManager[type as MapSourceTypeEnum]
    curManager.delete(id)
  }

  /**
   * 飞到地图资源
   * @param id String
   * @param type String
   */
  private _flyTo(id: string, type: MapSourceTypeEnum) {
    const curManager = this._typeManager[type]
    // if (curManager.flyTo) {
    curManager.flyTo(id)
    // }
  }
}
