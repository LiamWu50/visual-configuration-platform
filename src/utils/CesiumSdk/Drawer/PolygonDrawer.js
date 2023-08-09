import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../Auxiliary/CustomEvent'
import PolygonGraphic from '../Entity/PolygonGraphic'
import PolylineGraphic from '../Entity/PolylineGraphic'
import PointGraphic from '../Entity/PointGraphic'
import MouseAction from '../DrawAction/MouseAction'
import PointStyle from '../Style/PointStyle'
import PolylineStyle from '../Style/PolylineStyle'
import PolygonStyle from '../Style/PolygonStyle'

/**
 * 多边形绘制工具
 */
export default class PolygonDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._polygonDrawActionListener = null
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
    this._createPolygonGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制线段
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._polygonDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._polygonDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._polygonDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    const lastPosition = this._positions.pop()
    this._positions.push(position, lastPosition)

    if (this._positions.length === 3) this._removePolyline()
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
    this._removePolygonGraphic()
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
   * 跟新鼠标移动距离
   * @param {Cesium.Cartesian3} position
   */
  _updateCursorMove(position) {
    this._movePointGraphic.position = position
  }

  /**
   * 创建多边形
   */
  _createPolygonGraphic() {
    if (Cesium.defined(this._polygonGraphic)) return

    const hierarchy = new Cesium.CallbackProperty(() => {
        return new Cesium.PolygonHierarchy(this._positions)
      }, false),
      positions = new Cesium.CallbackProperty(() => {
        return this._positions.concat(this._positions[0])
      }, false)

    const polygonStyle = new PolygonStyle({ hierarchy, positions })
    this._polygonGraphic = new PolygonGraphic(polygonStyle)

    this._featureLayer.add(this._polygonGraphic)
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
   * 移除绘制的多边形
   */
  _removePolygonGraphic() {
    if (Cesium.defined(this._polygonGraphic)) {
      this._featureLayer.remove(this._polygonGraphic)
      this._polygonGraphic = undefined
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
