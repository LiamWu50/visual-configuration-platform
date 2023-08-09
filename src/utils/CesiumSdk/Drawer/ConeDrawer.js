import CustomEvent from '../auxiliary/CustomEvent'
import ConeGraphic from '../entities/ConeGraphic'
import PointGraphic from '../entities/PointGraphic'
import MouseAction from '../DrawAction/MouseAction'
import UtilsManager from '../auxiliary/UtilsManager'
import * as Cesium from 'cesium/Cesium.js'

/**
 * 圆锥形绘制工具
 */
export default class ConeDrawer {
  constructor(viewer) {
    this._viewer = viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(viewer)
    this._coneDrawActionListener = null
    this._activePoints = []
    this._radius = 0
    this._layer = viewer.dataSources.getByName('绘制图层')[0]

    this._startDraw()
  }

  get onDrawStop() {
    return this._onDrawStop
  }

  get disposeDraw() {
    return this._disposeDraw
  }

  get stopDraw() {
    return this._stopDraw
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._coneDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._coneDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Position} event
   */
  _leftClickAction(points) {
    this._activePoints = points
    if (points.length === 2) {
      this._coneGraphic.position = points[0].clone()
    } else if (points.length === 4) {
      this._stopDraw()
    }
  }

  /**
   * 鼠标移动事件
   * @param {Position} event
   */
  _mouseMoveAction(points) {
    this._activePoints = points
    let endPoint = points.slice(-1)[0].clone()
    this._movePointGraphic.position = endPoint

    if (points.length === 3) {
      this._updateConeHeight()
    } else {
      this._updateConeRadius(points[0], endPoint)
    }
  }

  /**
   * 鼠标右键事件
   * @param {Position} event
   */
  _rightClickAction() {
    this._stopDraw()
  }

  /**
   * 开始绘制圆锥
   */
  _startDraw() {
    this._createMoveCursor()
    this._createConeGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制圆锥
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._onDrawStop._event.raiseEvent(this._activePoints)
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._coneDrawActionListener)
  }

  /**
   * 清除绘制
   */
  _disposeDraw() {
    this._stopDraw()
    this._removeCone()
    this._positions = []
  }

  /**
   * 创建圆锥
   */
  _createConeGraphic() {
    if (Cesium.defined(this._coneGraphic)) return

    let property = new Cesium.CallbackProperty(() => {
      return this._radius
    }, false)

    this._coneGraphic = new ConeGraphic({
      bottomRadius: property,
      material: Cesium.Color.fromBytes(66, 153, 247, 180),
      outlineWidth: 10,
      outlineColor: Cesium.Color.fromBytes(255, 255, 255, 80)
    })
    this._layer.entities.add(this._coneGraphic._entity)
  }

  /**
   * 创建鼠标移动光标点
   */
  _createMoveCursor() {
    this._movePointGraphic = new PointGraphic({
      color: Cesium.Color.fromCssColorString('#4299f7'),
      outlineWidth: 2,
      pixelSize: 10
    })
    this._layer.entities.add(this._movePointGraphic._entity)
  }

  /**
   * 移除鼠标移动光标
   */
  _removeMoveCursor() {
    if (Cesium.defined(this._movePointGraphic)) {
      this._layer.entities.remove(this._movePointGraphic._entity)
      this._movePointGraphic = undefined
    }
  }

  /**
   * 移除绘制的圆锥
   */
  _removeCone() {
    if (Cesium.defined(this._coneGraphic)) {
      this._layer.entities.remove(this._coneGraphic._entity)
      this._coneGraphic = undefined
    }
  }

  /**
   * 更新圆锥的半径
   * @param {Cesium.Cartesian3} point1
   * @param {Cesium.Cartesian3} point2
   */
  _updateConeRadius(point1, point2) {
    let radius = UtilsManager.getLengthByCartesian(point1, point2)
    this._radius = radius
  }

  /**
   * 更新圆锥高度
   */
  _updateConeHeight() {
    let property = new Cesium.CallbackProperty(() => {
      return Cesium.Cartesian3.distance(this._activePoints[1], this._activePoints[2])
    }, false)
    this._coneGraphic.height = property
  }
}
