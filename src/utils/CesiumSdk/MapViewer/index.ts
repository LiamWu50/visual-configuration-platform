import { Color, FeatureDetection, Ion, Viewer } from 'cesium'

// import SpatialAnalysis from './SpatialAnalysis'
import Camera from '../Camera'
import DataManager from '../DataManager'
import Scene from '../Scene'

export default class MapViewer {
  private _viewer: Viewer
  private _camera: Camera
  private _scene: Scene
  private _dataManager: DataManager

  /**
   * 地图主入口
   * @param {String} container 承载地图的div控件的id
   * @param {Object} [options] 配置地图初始化参数，可选
   * @param {imageryProvider} [options.imageryProvider] 底图服务对象
   * @param {Boolean} [options.geocoder] 放大镜图标，查找位置工具，查找到之后会将镜头对准找到的地址，默认使用bing地图
   * @param {Boolean} [options.homeButton] 房子图标，视角返回初始位置
   * @param {Boolean} [options.sceneModePicker] 经纬网图标，选择视角的模式，有三种：3D，2D，哥伦布视图（2.5D)
   * @param {Boolean} [options.baseLayerPicker] 地图图标，图层选择器，选择要显示的地图服务和地形服务,默认会用到cesium.ion
   * @param {Boolean} [options.animation] 动画器件，显示当前时间，允许跳转特定时间
   * @param {Boolean} [options.navigationHelpButton] 问号图标，导航帮助按钮，显示默认的地图控制帮助
   * @param {Boolean} [options.timeline] 时间轴
   * @param {Boolean} [options.fullscreenButton] 全屏图标，全屏按钮
   * @param {Boolean} [options.shadows] 阴影
   * @param {Boolean} [options.infoBox] 点击后显示详细信息
   * @param {Boolean} [options.CreditsDisplay] 展示数据版权属性
   * @param {Boolean} [options.shouldAnimate]
   * @param {Boolean} [options.selectionIndicator]
   */
  constructor(container: string | HTMLDivElement, options: any = {}) {
    this._viewer = initViewer(container, options)
    // this._viewer.extend(Cesium.viewerCesiumInspectorMixin)
    this._dataManager = new DataManager(this._viewer)
    // this._spatialAnalysis = new SpatialAnalysis(this)
    this._camera = new Camera(this._viewer)
    this._scene = new Scene(this._viewer)
  }

  get dataManager() {
    return this._dataManager
  }

  get viewer() {
    return this._viewer
  }

  // get spatialAnalysis() {
  //   return this._spatialAnalysis
  // }

  get camera() {
    return this._camera
  }

  get scene() {
    return this._scene
  }
}

function initViewer(container: string | HTMLDivElement, options: any) {
  Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjBjYTQwMy05NjRhLTRiZmQtOWU2ZC02YTIzMTZjY2UyYzYiLCJpZCI6MTk2NjAsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzU5NjI3Mjh9.3-9slXLcFxuR4iDzyigEGKkCfTEiUvC06DSJ3Q2xEP0'

  const cesiumViewer = new Viewer(container, options)
  const creditContainer = cesiumViewer.cesiumWidget
    .creditContainer as HTMLElement
  creditContainer.style.display = 'none' //隐藏版本信息

  cesiumViewer.scene.globe.baseColor = new Color(0, 0, 0, 0)
  //cesiumViewer.scene.debugShowFramesPerSecond = true; //显示帧率,帧率与显示流畅度有关，或说与显卡有关
  cesiumViewer.scene.skyBox.show = false //是否显示星空
  cesiumViewer.scene.sun.show = false //是否显示太阳
  cesiumViewer.scene.moon.show = false //是否显示有月亮
  cesiumViewer.scene.skyAtmosphere.show = false //是否隐藏大气圈
  cesiumViewer.scene.globe.show = true //是否显示地球
  cesiumViewer.scene.globe.depthTestAgainstTerrain = true //是否开启深度检测
  cesiumViewer.scene.postProcessStages.fxaa.enabled = true
  const cesiumWidget = cesiumViewer.cesiumWidget as any
  cesiumWidget.supportsImageRenderingPixelated = (
    FeatureDetection as any
  ).supportsImageRenderingPixelated()
  cesiumWidget.forceResize = true
  cesiumViewer.scene.backgroundColor = new Color(0.0, 0.0, 0.0, 0.0)

  if ((FeatureDetection as any).supportsImageRenderingPixelated()) {
    let vtxfDpr = window.devicePixelRatio
    // 适度降低分辨率
    while (vtxfDpr >= 2.0) {
      vtxfDpr /= 2.0
    }
    cesiumViewer.resolutionScale = vtxfDpr
  }

  return cesiumViewer
}
