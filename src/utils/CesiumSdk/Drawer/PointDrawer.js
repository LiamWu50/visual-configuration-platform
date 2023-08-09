import * as Cesium from 'cesium/Cesium.js'
import PointGraphic from '../Entity/PointGraphic'
import CustomEvent from '../Auxiliary/CustomEvent'
import MouseAction from '../DrawAction/MouseAction'
import PointStyle from '../Style/PointStyle'

export default class PointDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._pointDrawActionListener = null
    this._featureLayer = mapViewer.dataManager.featureLayerCollection.getByName('绘制图层')
  }

  get onDrawStop() {
    return this._onDrawStop
  }

  get startDraw() {
    return this._startDraw
  }

  get disposeDraw() {
    return this._disposeDraw
  }

  get stopDraw() {
    return this._stopDraw
  }

  /**
   * 开始绘制线段
   */
  _startDraw() {
    this._createMoveCursor()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制点
   */
  _stopDraw() {
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._pointDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._pointDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._pointDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    this._updateCursorMove(position)
    this._stopDraw()
    this._onDrawStop.event.raiseEvent(position)
  }

  /**
   * 鼠标移动事件
   * @param {Cesium.Cartesian3} position
   */
  _mouseMoveAction(position) {
    this._updateCursorMove(position)
  }

  /**
   * 清除绘制
   */
  _disposeDraw() {
    this._stopDraw()
    this._removeMoveCursor()
    this._positions = []
  }

  /**
   * 创建鼠标移动光标点
   */
  _createMoveCursor() {
    this._movePointGraphic = new PointGraphic(new PointStyle())
    this._featureLayer.add(this._movePointGraphic)
  }

  /**
   * 跟新鼠标移动距离
   * @param {Position} position
   */
  _updateCursorMove(position) {
    this._movePointGraphic.position = position
  }

  /**
   * 移除鼠标移动光标
   */
  _removeMoveCursor() {
    if (Cesium.defined(this._movePointGraphic)) {
      this._featureLayer.remove(this._movePointGraphic)
      this._movePointGraphic = undefined
    }
  }
}
