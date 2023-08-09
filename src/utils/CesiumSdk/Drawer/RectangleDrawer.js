import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../Auxiliary/CustomEvent'
import RectangleGraphic from '../Entity/RectangleGraphic'
import RectangleStyle from '../Style/RectangleStyle'
import PointGraphic from '../Entity/PointGraphic'
import MouseAction from '../DrawAction/MouseAction'
import PointStyle from '../Style/PointStyle'

/**
 * 矩形绘制工具
 */

export default class RectangleDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._rectangleDrawActionListener = null
    this._positions = []
    this._radius = 0
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
   * 开始绘制矩形
   */
  _startDraw() {
    this._createMoveCursor()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制矩形
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._onDrawStop._event.raiseEvent(this._activePoints)
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._rectangleDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._rectangleDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._rectangleDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    const lastPosition = this._positions.pop()
    this._positions.push(position, lastPosition)

    if (this._positions.length === 2) {
      this._createRectangleGraphic()
      this._rectangleGraphic.position = this._positions[0]
    } else if (this._positions.length === 3) {
      this._positions.pop()
      this._stopDraw()
    }
  }

  /**
   * 鼠标移动事件
   * @param {Cesium.Cartesian3} position
   */
  _mouseMoveAction(position) {
    if (this._positions.length) this._positions.pop()
    this._positions.push(position)

    this._movePointGraphic.position = position
  }

  /**
   * 鼠标右键事件
   */
  _rightClickAction() {
    this._stopDraw()
  }

  /**
   * 清除绘制
   */
  _disposeDraw() {
    this._stopDraw()
    this._removeRectangle()
    this._positions = []
  }

  /**
   * 创建鼠标移动光标点
   */
  _createMoveCursor() {
    this._movePointGraphic = new PointGraphic(new PointStyle({ pixelSize: 5 }))
    this._featureLayer.add(this._movePointGraphic)
  }

  /**
   * 创建矩形
   */
  _createRectangleGraphic() {
    if (Cesium.defined(this._rectangleGraphic)) return

    const coordinates = new Cesium.CallbackProperty(() => {
      return Cesium.Rectangle.fromCartesianArray(this._positions)
    }, false)

    const positions = new Cesium.CallbackProperty(() => {
      return this._positions.concat(this._positions[0])
    }, false)

    const rectangleStyle = new RectangleStyle({ coordinates, positions })
    this._rectangleGraphic = new RectangleGraphic(rectangleStyle)
    this._featureLayer.add(this._rectangleGraphic)
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

  /**
   * 移除绘制的矩形
   */
  _removeRectangle() {
    if (Cesium.defined(this._rectangleGraphic)) {
      this._featureLayer.remove(this._rectangleGraphic)
      this._rectangleGraphic = undefined
    }
  }
}
