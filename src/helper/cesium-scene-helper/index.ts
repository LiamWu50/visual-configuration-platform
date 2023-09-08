import * as Cesium from 'cesium'

import { CesiumdAccessToken, MapboxAccessToken } from '@/common/map-base'

/**
 * Cesium场景加载工具
 */
export default new (class CesiumSceneHelper {
  /**
   * 初始化地球
   * @param {String || HTMLDivElement} target
   * @return {CesiumSdk.MapViewer} mapViewer
   */
  public initViewer(target: string | HTMLDivElement) {
    Cesium.Ion.defaultAccessToken = CesiumdAccessToken
    const rectangle = Cesium.Rectangle.fromDegrees(90, -20, 110, 90)
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle

    const options = this.getInitOptions()
    const viewer = new Cesium.Viewer(target, options)
    const creditContainer = viewer.cesiumWidget.creditContainer as HTMLElement
    creditContainer.style.display = 'none' //隐藏版本信息

    viewer.scene.globe.baseColor = new Cesium.Color(0, 0, 0, 0)
    viewer.scene.debugShowFramesPerSecond = false //显示帧率,帧率与显示流畅度有关，或说与显卡有关
    viewer.scene.skyBox.show = true //是否显示星空
    viewer.scene.sun.show = false //是否显示太阳
    viewer.scene.moon.show = false //是否显示有月亮
    viewer.scene.skyAtmosphere.show = false //是否隐藏大气圈
    viewer.scene.globe.show = true //是否显示地球
    viewer.scene.globe.depthTestAgainstTerrain = true //是否开启深度检测
    viewer.scene.postProcessStages.fxaa.enabled = true
    const cesiumWidget = viewer.cesiumWidget as any
    cesiumWidget.supportsImageRenderingPixelated = (
      Cesium.FeatureDetection as any
    ).supportsImageRenderingPixelated()
    cesiumWidget.forceResize = true
    // viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)
    viewer.scene.debugShowFramesPerSecond = true

    if ((Cesium.FeatureDetection as any).supportsImageRenderingPixelated()) {
      let vtxfDpr = window.devicePixelRatio
      // 适度降低分辨率
      while (vtxfDpr >= 2.0) {
        vtxfDpr /= 2.0
      }
      viewer.resolutionScale = vtxfDpr
    }

    return viewer
  }

  /**
   * 获取地球初始化参数
   * @returns {Object}
   */
  private getInitOptions() {
    return {
      baseLayer: new Cesium.ImageryLayer(
        new Cesium.MapboxImageryProvider({
          mapId: 'mapbox.satellite',
          accessToken: MapboxAccessToken
        }),
        {}
      ),
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      shadows: true,
      infoBox: false,
      CreditsDisplay: false,
      shouldAnimate: true,
      selectionIndicator: false,
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true
        }
      }
    }
  }
})()
