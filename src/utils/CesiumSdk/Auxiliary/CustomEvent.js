import * as Cesium from 'cesium/Cesium.js'
/**
 * 事件器
 */
class CustomEvent {
  /**
   * 构造函数
   */
  constructor() {
    this._event = new Cesium.Event()
  }

  get event() {
    return this._event
  }

  /**
   * 获取已添加的监听器的数量
   * @type {Number}
   * @memberof CustomEvent.prototype
   * @readonly
   */
  get numberOfListeners() {
    return this._event.numberOfListeners
  }

  /**
   * 添加事件监听器
   * @param {Function} listener 事件监听器
   * @return {Function} 用于移除该监听器的回调函数
   */
  addEventListener(listener) {
    let removeCallback = this._event.addEventListener(listener)
    return function() {
      removeCallback()
    }
  }

  /**
   * 触发事件
   */
  raiseEvent() {
    this._event.raiseEvent()
  }

  /**
   * 移除监听器
   * @param {Function} listener 需要移除的监听器
   * @return {Boolean} 移除成功返回true，否则返回false，若返回false，可能是该监听器先前已经被移除或者未被添加
   */
  removeEventListener(listener) {
    return this._event.removeEventListener(listener)
  }
}

export default CustomEvent
