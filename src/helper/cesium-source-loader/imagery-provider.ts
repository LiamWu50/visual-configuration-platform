import * as Cesium from 'cesium'

import { MapboxAccessToken } from '@/common/map-base'

function ArcGisMapServerImageryProvider(url: string) {
  return Cesium.ArcGisMapServerImageryProvider.fromUrl(url, {
    enablePickFeatures: false
  })
}

function BingMapsImageryProvider(url: string, options: any) {
  return Cesium.BingMapsImageryProvider.fromUrl(url, {
    key: options.key,
    mapStyle: Cesium.BingMapsStyle.AERIAL
  })
}

function TileMapServiceImageryProvider(url: string) {
  return Cesium.TileMapServiceImageryProvider.fromUrl(url, {})
}

/**
 * mapbox服务
 */
function MapboxImageryProvider(url: string, options: any) {
  const mapId = Cesium.defaultValue(options.mapId, 'mapbox.satellite')
  return new Cesium.MapboxImageryProvider({
    mapId,
    accessToken: MapboxAccessToken
  })
}

function SingleTileImageryProvider(url: string, options: any) {
  options.rectangle = Cesium.defaultValue(
    options.rectangle,
    Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0)
  )
  return Cesium.SingleTileImageryProvider.fromUrl(url, {
    rectangle: options.rectangle
  })
}

function UrlTemplateImageryProvider(url: string) {
  return new Cesium.UrlTemplateImageryProvider({
    url
  })
}

/**
 * wms服务
 */
function WebMapServiceImageryProvider(url: string, options: any) {
  return new Cesium.WebMapServiceImageryProvider({
    url,
    layers: options.laers,
    parameters: options.parameters
  })
}

/**
 * wmts服务按照参数进行加载
 */
function WebMapTileServiceImageryProvider(url: string, options: any) {
  return new Cesium.WebMapTileServiceImageryProvider({
    url,
    layer: options.layer,
    style: options.style,
    tileMatrixSetID: options.tileMatrixSetID,
    format: options.format,
    maximumLevel: options.maximumLevel
  })
}

export default {
  arcGisMapServer: ArcGisMapServerImageryProvider,
  bingMap: BingMapsImageryProvider,
  tileMapServer: TileMapServiceImageryProvider,
  mapBox: MapboxImageryProvider,
  singleTile: SingleTileImageryProvider,
  urlTemplate: UrlTemplateImageryProvider,
  webMapService: WebMapServiceImageryProvider,
  webMapTileService: WebMapTileServiceImageryProvider
}
