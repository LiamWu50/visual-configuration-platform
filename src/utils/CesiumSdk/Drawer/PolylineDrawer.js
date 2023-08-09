import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../Auxiliary/CustomEvent'
import PolylineGraphic from '../Entity/PolylineGraphic'
import PointGraphic from '../Entity/PointGraphic'
import MouseAction from '../DrawAction/MouseAction'
import PolylineStyle from '../Style/PolylineStyle'
import PointStyle from '../Style/PointStyle'

/**
 * 线段绘制工具
 */
export default class PolylineDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._polylineDrawActionListener = null
    this._positions = []
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
    this._createPolylineGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制线段
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._polylineDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._polylineDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._polylineDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    const lastPosition = this._positions.pop()
    this._positions.push(position, lastPosition)
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
   * @param {Cesium.Cartesian3} position
   */
  _rightClickAction(position) {
    this._positions.pop()
    this._positions.push(position)
    this._stopDraw()
    this._onDrawStop.event.raiseEvent(this._positions)
  }

  /**
   * 清除绘制
   */
  _disposeDraw() {
    this._stopDraw()
    this._removePolyline()
    this._positions = []
  }

  /**
   * 创建线段
   */
  _createPolylineGraphic() {
    if (Cesium.defined(this._polylineGraphic)) return

    const property = new Cesium.CallbackProperty(() => {
      return this._positions
    }, false)
    const polylineStyle = new PolylineStyle({ positions: property })

    this._polylineGraphic = new PolylineGraphic(polylineStyle)
    this._featureLayer.add(this._polylineGraphic)
  }

  /**
   * 创建鼠标移动光标点
   */
  _createMoveCursor() {
    this._movePointGraphic = new PointGraphic(new PointStyle({ pixelSize: 5 }))
    this._featureLayer.add(this._movePointGraphic)
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
   * 移除绘制的线段
   */
  _removePolyline() {
    if (Cesium.defined(this._polylineGraphic)) {
      this._featureLayer.remove(this._polylineGraphic)
      this._polylineGraphic = undefined
    }
  }
}
