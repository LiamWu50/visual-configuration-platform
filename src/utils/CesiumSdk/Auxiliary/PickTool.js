import * as Cesium from 'cesium/Cesium.js'

export default class PickTool {
  constructor(viewer) {
    this._scene = viewer.scene
  }
  /**
   * 从场景的深度缓冲区中拾取相应的位置
   * @param {Cartesian2} Cartesian2
   * @return {Cartesian3|undefined} 返回三维坐标点
   */
  pickPosition(cartesian2) {
    let cartesian3 = this._scene.pickPosition(cartesian2)
    if (Cesium.defined(cartesian3)) return cartesian3
  }

  /**
   * 返回包含给定窗口位置的基元的对象。
   * @param {Cesium.cartesian2} cartesian2
   * @return {*} 返回拾取到的地图对象
   */
  pickedObject(cartesian2) {
    let obj = this._scene.pick(cartesian2)
    if (Cesium.defined(obj)) {
      let pickedObj = obj.id
      return pickedObj
    }
  }

  /**
   * 返回与相机射线相交的基元对象列表，基元对象在列表中的
   * @param {Cesium.cartesian2} cartesian2
   * @param {Number} limit
   * @return {*}
   */
  pickedObjects(cartesian2, limit) {
    let objs = this._scene.drillPick(cartesian2, limit)
    if (Cesium.defined(objs)) {
      return objs
    }
  }

  /**
   * 拾取primitive
   * @param {Cesium.cartesian2} position
   */
  pickPrimitive(position) {
    let geometryInstance = null
    let pick = this._scene.pick(position)
    if (pick && pick.primitive && typeof pick.id === 'string') {
      geometryInstance = pick.primitive.geometryInstances.find(item => item.id === pick.id)
      geometryInstance.pickPrimitive = pick.primitive
    }

    return geometryInstance
  }
}
