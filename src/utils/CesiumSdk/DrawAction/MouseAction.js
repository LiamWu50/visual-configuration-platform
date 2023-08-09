import * as Cesium from 'cesium/Cesium.js'
import PickTool from '../Auxiliary/PickTool'

export default class MouseAction {
  constructor(viewer) {
    this._scene = viewer.scene
    this._pickTool = new PickTool(viewer)
    this._eventHander = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
  }

  get start() {
    return this._start
  }

  get stop() {
    return this._stop
  }

  get bindListener() {
    return this._bindListener
  }

  get unbindListener() {
    return this._unbindListener
  }

  /**
   * 初始化鼠标动作事件
   */
  _start() {
    const { LEFT_CLICK, MOUSE_MOVE, RIGHT_CLICK } = Cesium.ScreenSpaceEventType

    this._eventHander.setInputAction(this._onMouserLeftClick.bind(this), LEFT_CLICK)
    this._eventHander.setInputAction(this._onMouseMove.bind(this), MOUSE_MOVE)
    this._eventHander.setInputAction(this._onMouseRightClick.bind(this), RIGHT_CLICK)
  }

  /**
   * 移除鼠标动作事件
   */
  _stop() {
    const { LEFT_CLICK, MOUSE_MOVE, RIGHT_CLICK } = Cesium.ScreenSpaceEventType

    this._eventHander.removeInputAction(LEFT_CLICK)
    this._eventHander.removeInputAction(MOUSE_MOVE)
    this._eventHander.removeInputAction(RIGHT_CLICK)
  }

  /**
   * 鼠标左键点击事件
   * @param {Event} evt
   */
  _onMouserLeftClick(evt) {
    if (this.onLeftClick) {
      const leftClickPosition = this._pickTool.pickPosition(evt.position, this._scene)
      if (leftClickPosition) this.onLeftClick(leftClickPosition)
    }
  }

  /**
   * 鼠标移动事件
   * @param {Event} evt
   */
  _onMouseMove(evt) {
    if (this.onMouseMove) {
      const mouseMovePosition = this._pickTool.pickPosition(evt.endPosition, this._scene)
      if (mouseMovePosition) this.onMouseMove(mouseMovePosition)
    }
  }

  /**
   * 鼠标右键事件
   * @param {Event} evt
   */
  _onMouseRightClick(evt) {
    if (this.onRightClick) {
      const rightClickPosition = this._pickTool.pickPosition(evt.position, this._scene)
      if (rightClickPosition) this.onRightClick(rightClickPosition)
    }
  }

  /**
   * 订阅事件
   * @param {Object} listener
   */
  _bindListener(listener) {
    let { onMouseMove, onLeftClick, onRightClick } = listener

    if (onLeftClick) this.onLeftClick = onLeftClick
    if (onMouseMove) this.onMouseMove = onMouseMove
    if (onRightClick) this.onRightClick = onRightClick
  }

  /**
   * 取消订阅事件
   * @param {Object} listener
   */
  _unbindListener(listener) {
    let { onMouseMove, onLeftClick, onRightClick } = listener

    if (onMouseMove) this.onMouseMove = undefined
    if (onLeftClick) this.onLeftClick = undefined
    if (onRightClick) this.onRightClick = undefined
  }
}
