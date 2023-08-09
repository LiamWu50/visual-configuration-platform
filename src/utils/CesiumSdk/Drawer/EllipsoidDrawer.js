import * as Cesium from 'cesium/Cesium.js'
import EllipseDrawer from './EllipseDrawer'
import EllipsoidGraphic from '../Entity/EllipsoidGraphic'
import EllipsoidStyle from '../Style/EllipsoidStyle'
/**
 * 三维球绘制工具
 */
export default class EllipsoidDrawer extends EllipseDrawer {
  constructor(mapViewer) {
    super(mapViewer)
  }

  /**
   * 创建球
   */
  _createCircleGraphic() {
    if (Cesium.defined(this._ellipseGraphic)) return

    let property = new Cesium.CallbackProperty(() => {
      return new Cesium.Cartesian3(this._radius, this._radius, this._radius)
    }, false)

    const ellipsoidStyle = new EllipsoidStyle({ radii: property })

    this._ellipseGraphic = new EllipsoidGraphic(ellipsoidStyle)
    this._featureLayer.add(this._ellipseGraphic)
  }
}
