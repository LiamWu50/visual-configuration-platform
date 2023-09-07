import * as Cesium from 'cesium'

import { MapSourceType, MapSourceTypeEnum } from '@/common/map-base'

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
  private imageryLayerManager: ImageryLayerManager
  private tilesetLayerManager: TilesetLayerManager
  private gltfModelManager: GltfModelManager
  private terrainManager: TerrainManager
  private featureLayerManager: FeatureLayerManager
  private specialLayerManager: SpecialLayerManager

  constructor(viewer: Cesium.Viewer) {
    this.imageryLayerManager = new ImageryLayerManager(viewer)
    this.tilesetLayerManager = new TilesetLayerManager(viewer)
    this.gltfModelManager = new GltfModelManager(viewer)
    this.terrainManager = new TerrainManager(viewer)
    this.featureLayerManager = new FeatureLayerManager(viewer)
    this.specialLayerManager = new SpecialLayerManager(viewer)
  }

  get typeManager() {
    return {
      [MapSourceType.IMAGE_SERVICE]: this.imageryLayerManager,
      [MapSourceType.TERRAIN_SERVICE]: this.terrainManager,
      [MapSourceType.TILE_SET]: this.tilesetLayerManager,
      [MapSourceType.GLTF_MODEL]: this.gltfModelManager,
      [MapSourceType.FEATURE]: this.featureLayerManager,
      [MapSourceType.SPECIAL_SUBJECT]: this.specialLayerManager
    }
  }

  /**
   * 加载地图资源
   * @param type String
   * @param options Object
   */
  public addSource(type: MapSourceTypeEnum, options: any) {
    console.log('type', type)

    const curManager = this.typeManager[type]
    curManager.add(options)
  }

  /**
   * 删除地图资源
   * @param id String
   * @param type String
   */
  public deleteSource(id: string, type: string) {
    const curManager = this.typeManager[type as MapSourceTypeEnum]
    curManager.delete(id)
  }

  /**
   * 飞到地图资源
   * @param id String
   * @param type String
   */
  public flyTo(id: string, type: MapSourceTypeEnum) {
    const curManager = this.typeManager[type]
    curManager.flyTo(id)
  }

  /**
   * 获取各类型的资源
   */
  public getTypeDataSource() {
    const dataSource = Object.keys(this.typeManager).map((k) => {
      const loader = this.typeManager[k as MapSourceTypeEnum]
      return loader.getLoadedSource()
    })
    return dataSource
  }
}
