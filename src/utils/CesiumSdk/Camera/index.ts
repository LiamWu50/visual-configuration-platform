import * as Cesium from 'cesium'

function getCameraDistance(viewer: Cesium.Viewer) {
  const canvas = viewer.scene.canvas
  const center = new Cesium.Cartesian2(
    Math.round(canvas.width / 2.0),
    Math.round(canvas.height / 2.0)
  )
  const ray = viewer.camera.getPickRay(center)
  const cartesian3 = viewer.scene.globe.pick(ray as Cesium.Ray, viewer.scene)
  const distance = cartesian3
    ? Cesium.Cartesian3.distance(viewer.camera.position, cartesian3)
    : 0
  return distance
}

export default class Camera {
  private viewer: Cesium.Viewer

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
  }

  /**
   * 飞行到指定位置
   * @param {Cesium.Cartesian3} position
   */
  public flyTo(position: Cesium.Cartesian3) {
    this.viewer.camera.flyTo({
      destination: position
    })
  }

  /**
   * 飞行到地球对象
   * @param {Object} Obj
   */
  // public flyToObj(Obj: any) {
  //   console.log(obj)
  // }

  /**
   * 相机高度
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */

  public magnitude() {
    return this.viewer.camera.getMagnitude()
  }

  /**
   * 方向角,水平面360度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */

  public heading() {
    const h = Cesium.Math.toDegrees(this.viewer.camera.heading)
    return h
  }

  /**
   * 俯仰角,上下-90到90度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */
  public pitch() {
    const p = Cesium.Math.toDegrees(this.viewer.camera.pitch)
    return p
  }

  /**
   * 横滚角,侧向360度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */
  public roll() {
    return Cesium.Math.toDegrees(this.viewer.camera.roll)
  }

  /**
   * 视距，单位米
   * @type {Number}
   * @memberof Camera.prototype
   */
  public distance() {
    return getCameraDistance(this.viewer)
  }
}
