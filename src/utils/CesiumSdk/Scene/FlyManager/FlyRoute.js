import * as Cesium from 'cesium/Cesium.js'
import { v4 as uuid } from 'uuid'
import CustomEvent from '../../Auxiliary/CustomEvent'
import FlyStep from './FlyStep'
import FlyState from './FlyPlayState'
import FlyRouteLoopMode from './FlyRouteLoopMode'

/**
 * 飞行路线
 */
class FlyRoute {
  /**
   * 构造函数
   * @param {String} [name] 飞行线路名称
   * @param {String} [id] 飞行线路id，若未设置则自动生成
   */
  constructor(name, id) {
    /**
     * 飞行路线名称
     * @type {String}
     */
    this.name = name
    this._flyState = FlyState.STOP
    /**
     * 飞行循环模式
     * @type {Number}
     * @default FlyRouteLoopMode.STOP_AT_END
     */
    this.loopMode = FlyRouteLoopMode.STOP_AT_END
    this._id = Cesium.defaultValue(id, uuid())
    this._speed = 100
    this._tt = 0 // 速度改变时的过渡时间
    this._ts = undefined // 速度改变时的过渡速度
    this._toId = undefined // 速度改变时过渡时间器的id
    this._steps = []
    this._isActive = undefined // 是否为当前飞行路径
    this._onReachedStep = new CustomEvent() // 到达站点事件
    this._onFlyStateChanged = new CustomEvent() // 飞行状态改变事件
  }

  /**
   * 添加站点
   * @param {FlyStep} step 站点
   * @param {Number|undefined} [index] 站点插入的索引，从0开始。若不传索引号或者索引号为undefined则默认插在最后
   */
  add(step, index) {
    if (index && index instanceof Number) {
      this._steps.splice(index, 0, step)
    } else {
      this._steps.push(step)
    }
  }

  /**
   * 移除站点
   * @param {FlyStep} step 需要移除的站点
   */
  remove(step) {
    let index = this._steps.findIndex(s => s.id == step.id)
    if (index !== -1) {
      this._steps.splice(index, 1)
    }
  }

  /**
   * 移除所有站点
   */
  removeAll() {
    this._steps = []
  }

  /**
   * 通过站点索引号获取站点
   * @param {Number} index 站点索引号
   * @return {FlyStep|undefined} 返回获取到的站点，若未找到则返回undefined
   */
  get(index) {
    return this._steps[index]
  }

  /**
   * 通过站点id获取站点
   * @param {String} stepId 站点id
   * @return {FlyStep|undefined} 返回获取到的站点，若未找到则返回undefined
   */
  getById(stepId) {
    let index = this._steps.findIndex(s => s.id == stepId)
    return this._steps[index]
  }
}

Object.defineProperties(FlyRoute.prototype, {
  /**
   * 飞行路线id
   * @type {String}
   * @memberof FlyRoute.prototype
   * @readonly
   */
  id: {
    get: function() {
      return this._id
    }
  },

  /**
   * 是否为当前活动路线
   * @type {Boolean}
   * @memberof FlyRoute.prototype
   * @readonly
   */
  isActive: {
    get: function() {
      return this._isActive
    }
  },

  /**
   * 获取或设置飞行路线的飞行速度，单位：Km/h
   * @type {Number}
   * @memberof FlyRoute.prototype
   * @default 100
   */
  speed: {
    get: function() {
      if (this.flyState == FlyState.PLAY) {
        return this._toId != undefined && this._ts != undefined ? this._ts : this._speed
      } else {
        return this._speed
      }
    },
    set: function(value) {
      let self = this
      if (isNaN(value)) return
      value = Number(value)
      if (value < 1) return
      if (self.flyState == FlyState.PLAY) {
        // 当用户在连续不停改变速度时，只取停止改变时最后一次速度值
        self._tt += 500
        self._ts = value
        if (!self._toId) {
          self._toId = window.setTimeout(() => {
            if (self._ts !== self._speed) {
              self._speed = self._ts
            }
            self._tt = 0
            self._ts = undefined
            self._toId = undefined
          }, self._tt)
        }
      } else {
        if (value !== self._speed) {
          self._speed = value
        }
      }
    }
  },

  /**
   * 飞行状态
   * @type {Number}
   * @memberof FlyRoute.prototype
   * @default FlyState.STOP
   * @readonly
   */
  flyState: {
    get: function() {
      return this._flyState
    }
  },

  /**
   * 飞行线路中站点个数
   * @type {Number}
   * @memberof FlyRoute.prototype
   * @readonly
   */
  count: {
    get: function() {
      return this._steps.length
    }
  },

  /**
   * 飞行站点数组集合，只能获取站点数组的副本，直接向该数组中添加、移除站点是无效的</br>
   * 若需要添加、移除站点请使用FlyRoute.add()和FlyRoute.remove()方法
   * @type {FlyStep[]}
   * @memberof FlyRoute.prototype
   * @readonly
   */
  steps: {
    get: function() {
      return [].concat(this._steps)
    }
  },

  /**
   * 到达站点事件
   * @type {CustomEvent}
   * @memberof FlyRoute.prototype
   * @readonly
   * @event
   */
  onReachedStep: {
    get: function() {
      return this._onReachedStep
    }
  },

  /**
   * 飞行状态改变事件
   * @type {CustomEvent}
   * @memberof FlyRoute.prototype
   * @readonly
   * @event
   */
  onFlyStateChanged: {
    get: function() {
      return this._onFlyStateChanged
    }
  }
})

export default FlyRoute
