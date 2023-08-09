import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../Auxiliary/CustomEvent'
import CylinderGraphic from '../Entity/CylinderGraphic'
import CylinderStyle from '../Style/CylinderStyle'
import PointStyle from '../Style/PointStyle'
import PointGraphic from '../Entity/PointGraphic'
import EllipseGraphic from '../Entity/EllipseGraphic'
import EllipseStyle from '../Style/EllipseStyle'
import MouseAction from '../DrawAction/MouseAction'
import ComputedTool from '../Auxiliary/ComputedTool'

/**
 * 圆柱形绘制工具
 */
export default class BoxDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._cylinderDrawActionListener = null
    this._positions = []
    this._radius = 0
    this._ellipseRadius = 0
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
   * 开始绘制圆柱
   */
  _startDraw() {
    this._createMoveCursor()
    this._createEllipseGraphic()
    this._createCylinderGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制圆柱
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._onDrawStop._event.raiseEvent(this._activePoints)
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._cylinderDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._cylinderDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._cylinderDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    const lastPosition = this._positions.pop()
    this._positions.push(position, lastPosition)

    if (this._positions.length === 2) {
      this._cylinderGraphic.position = this._positions[0]
      this._ellipseGraphic.position = this._positions[0]
    } else if (this._positions.length === 3) {
      this._removeEllipse()
    } else if (this._positions.length === 4) {
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

    if (this._positions.length === 2) {
      this._movePointGraphic.position = position
      this._updateCircleRadius(this._positions[0], this._positions[1])
    }

    if (this._positions.length === 3) {
      this._updateCylinderHeight()
    } else {
      this._movePointGraphic.position = position
      this._updateCylinderRadius(this._positions[0], position)
    }
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
    this._removeCylinder()
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
   * 创建圆
   */
  _createEllipseGraphic() {
    if (Cesium.defined(this._ellipseGraphic)) return

    const property = new Cesium.CallbackProperty(() => {
      return this._ellipseRadius
    }, false)
    const ellipseStyle = new EllipseStyle({ semiMajorAxis: property, semiMinorAxis: property })

    this._ellipseGraphic = new EllipseGraphic(ellipseStyle)
    this._featureLayer.add(this._ellipseGraphic)
  }

  /**
   * 创建圆柱
   */
  _createCylinderGraphic() {
    if (Cesium.defined(this._cylinderGraphic)) return

    let property = new Cesium.CallbackProperty(() => {
      return this._radius
    }, false)

    const cylinderStyle = new CylinderStyle({ bottomRadius: property, topRadius: property })
    this._cylinderGraphic = new CylinderGraphic(cylinderStyle)

    this._featureLayer.add(this._cylinderGraphic)
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
   * 移除绘制的圆
   */
  _removeEllipse() {
    if (Cesium.defined(this._ellipseGraphic)) {
      this._featureLayer.remove(this._ellipseGraphic)
      this._ellipseGraphic = undefined
    }
  }

  /**
   * 移除绘制的圆柱
   */
  _removeCylinder() {
    if (Cesium.defined(this._cylinderGraphic)) {
      this._featureLayer.remove(this._cylinderGraphic)
      this._cylinderGraphic = undefined
    }
  }

  /**
   * 更新圆柱的半径
   * @param {Cesium.Cartesian3} point1
   * @param {Cesium.Cartesian3} point2
   */
  _updateCylinderRadius(point1, point2) {
    let radius = ComputedTool.getLengthByCartesian(point1, point2)
    this._radius = radius
  }

  /**
   * 更新圆柱高度
   */
  _updateCylinderHeight() {
    let property = new Cesium.CallbackProperty(() => {
      return Cesium.Cartesian3.distance(this._positions[1], this._positions[2])
    }, false)
    this._cylinderGraphic.height = property
  }

  /**
   * 更新圆的半径
   * @param {Cesium.Cartesian3} point1
   * @param {Cesium.Cartesian3} point2
   */
  _updateCircleRadius(point1, point2) {
    let radius = ComputedTool.getLengthByCartesian(point1, point2)
    this._ellipseRadius = radius
  }
}
