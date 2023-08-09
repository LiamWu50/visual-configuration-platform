import { NearFarScalar, Scene, Viewer } from 'cesium'

/**
 * 地表渲染
 */
export default class SurfaceRender {
  private viewer: Viewer
  private scene: Scene

  constructor(viewer: Viewer) {
    this.viewer = viewer
    this.scene = viewer.scene
  }

  /**
   * 开启地表渲染
   */
  public open() {
    const globe = this.scene.globe
    globe.depthTestAgainstTerrain = false
    globe.translucency.frontFaceAlphaByDistance = new NearFarScalar(
      200.0,
      0.0,
      800.0,
      1.0
    )
    globe.translucency.enabled = true
  }

  /**
   * 关闭地表渲染
   */
  public close() {
    const globe = this.scene.globe
    globe.depthTestAgainstTerrain = true
    globe.translucency.enabled = false
  }
}
