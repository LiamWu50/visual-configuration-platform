import { v4 as uuid } from 'uuid'

import * as Cesium from 'cesium/Cesium.js'
import Position3 from '../../Auxiliary/Coordinate/Position3'
import Camera from '../../Camera'

/**
 * 飞行步（站点）类
 * @class
 */
class FlyStep {
  /**
   * 构造函数
   * @param {Position3} position 站点坐标
   * @param {Number} [heading=0] 站点方向角，单位：弧度
   * @param {Number} [pitch=0] 站点俯仰角，单位：弧度
   * @param {Number} [roll=0] 站点横滚角，单位：弧度
   * @param {Number} [waitTime=0] 站点等待停留时间，单位：秒
   * @constructor
   */
  constructor(position, heading = 0, pitch = 0, roll = 0, waitTime = 0) {
    this._id = uuid()
    if (!Cesium.defined(position)) throw Error('position是必需的！')
    /**
     * 站点的位置
     * @type {Position3}
     */
    this.position = new Position3(position.longitude, position.latitude, position.altitude)
    /**
     * 站点方向角，单位：弧度，默认值0
     * @type {Number}
     */
    this.heading = heading
    /**
     * 站点俯仰角，单位：弧度，默认值0
     * @type {Number}
     */
    this.pitch = pitch
    /**
     * 站点横滚角，单位：弧度，默认值0
     * @type {Number}
     */
    this.roll = roll
    /**
     * 站点等待停留时间，单位：秒，默认值0
     * @type {Number}
     */
    this.waitTime = waitTime
  }

  /**
   * 通过当前的相机状态获取飞行路线的站点
   * @static
   * @param {Camera} camera 需要获取状态的相机
   * @return {FlyStep} 返回一个飞行站点对象
   */
  static fromCurrentCamera(camera) {
    let step = new FlyStep(
      camera.position,
      Cesium.Math.toRadians(camera.heading),
      Cesium.Math.toRadians(camera.pitch),
      Cesium.Math.toRadians(camera.roll)
    )
    return step
  }

  /**
   * 创建飞行步（站点）的副本
   * @return {FlyStep} 返回飞行步（站点）的副本
   */
  clone() {
    let self = this
    let _position = self.position.clone()
    return new FlyStep(_position, self.heading, self.pitch, self.roll, self.waitTime)
  }
}

Object.defineProperties(FlyStep.prototype, {
  /**
   * 站点id
   * @type {String}
   * @memberof FlyStep.prototype
   * @readonly
   */
  id: {
    get: function() {
      return this._id
    }
  }
})

export default FlyStep
