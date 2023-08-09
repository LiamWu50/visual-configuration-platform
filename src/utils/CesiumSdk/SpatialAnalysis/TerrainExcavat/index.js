import CesiumApi from '../../index'
import ExcavatHelper from './ExcavatHelper'
/**
 * 地形开挖
 */
class TerrainExcavat {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._drawer = new CesiumApi.PolygonDrawer(mapViewer)
    this._excavatHelper = null
  }

  get initClipTool() {
    return this._initClipTool
  }

  get claer() {
    return this._claer
  }

  /**
   * 初始化裁剪工具
   * @param {Object} options
   * @param {Number} height 挖掘深度
   * @param {Image} bottomMaterial 底部材质图片
   * @param {Image} wallMaterial 井面材质图片
   */
  _initClipTool(options) {
    if (!this._excavatHelper) this._excavatHelper = new ExcavatHelper(this._viewer, options)

    this._clear()
    this._drawer.startDraw()

    const func = positions => {
      this._drawer.disposeDraw()
      this._excavatHelper.startClip(positions)
      this._drawer.onDrawStop.removeEventListener(func)
    }
    this._drawer.onDrawStop.addEventListener(func)
  }

  /**
   * 清除挖掘题
   */
  _clear() {
    if (this._excavatHelper) {
      this._excavatHelper.clear()
    }
  }
}

export default TerrainExcavat
