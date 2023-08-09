//右键菜单配置表
export const rightMenusConfig = {
  ATTRIBUTES: 1, //属性
  REAL_NAME: 2, //重命名
  DELETE: 3, //删除
  FLY_TO: 4 //飞到
}

// 地图数据类型
export enum MapSourceType {
  IMAGE_SERVICE = 'IMAGE_SERVICE',
  TERRAIN_SERVICE = 'TERRAIN_SERVICE',
  TILE_SET = 'TILE_SET',
  GLTF_MODEL = 'GLTF_MODEL',
  FEATURE = 'FEATURE',
  SPECIAL_SUBJECT = 'SPECIAL_SUBJECT'
}

export type MapSourceTypeEnum = keyof typeof MapSourceType

// 影像服务类型
export enum ImagerProviderType {
  arcGisMapServer = 'arcGisMapServer',
  bingMap = 'bingMap',
  tileMapServer = 'tileMapServer',
  mapBox = 'mapBox',
  singleTile = 'singleTile',
  urlTemplate = 'urlTemplate',
  webMapService = 'webMapService',
  webMapTileService = 'webMapTileService'
}

// 地形服务类型
export enum TerrainType {
  ellipsoidTerrain = 'EllipsoidTerrain',
  cesiumTerrain = 'CesiumTerrain',
  worldTerrain = 'WorldTerrain'
}
