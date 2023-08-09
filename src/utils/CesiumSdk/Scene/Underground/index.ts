import { Scene, Viewer } from 'cesium'

/**
 * 地下模式管理工具
 */
export default class Underground {
  private scene: Scene

  constructor(viewer: Viewer) {
    this.scene = viewer.scene
  }

  /**
   * 开启地下模式
   */
  public open() {
    this.scene.screenSpaceCameraController.enableCollisionDetection = false
  }

  /**
   * 关闭地下模式
   */
  public close() {
    this.scene.screenSpaceCameraController.enableCollisionDetection = true
  }
}
