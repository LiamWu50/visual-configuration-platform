import { Viewer } from 'cesium'

import SurfaceRender from './SurfaceRender'
import Underground from './Underground'

/**
 * 场景管理工具
 */
export default class Scene {
  private underground: Underground
  private surfaceRender: SurfaceRender

  constructor(viewer: Viewer) {
    this.underground = new Underground(viewer)
    this.surfaceRender = new SurfaceRender(viewer)
  }
}
