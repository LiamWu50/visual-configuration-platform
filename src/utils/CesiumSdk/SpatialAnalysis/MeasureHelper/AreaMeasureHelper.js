import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../../Auxiliary/CustomEvent'
import PolygonGraphic from '../../Entity/PolygonGraphic'
import PolygonStyle from '../../Style/PolygonStyle'
import PointGraphic from '../../Entity/PointGraphic'
import PointStyle from '../../Style/PointStyle'
import LabelGraphic from '../../Entity/LabelGraphic'
import LabelStyle from '../../Style/LabelStyle'
import MouseAction from '../../DrawAction/MouseAction'
import UtilsManager from '../../Auxiliary/UtilsManager'

/**
 * 面积测量工具
 */
export default class AreaMeasureHelper {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._polygonDrawActionListener = null
    this._positions = []
    this._featureLayer = mapViewer.dataManager.featureLayerCollection.getByName('测量图层')
  }

  get startMeasure() {
    return this._startMeasure
  }

  get stopMeasure() {
    return this._stopMeasure
  }

  get clearMeasure() {
    return this._clearMeasure
  }

  /**
   * 开始测量
   */
  _startMeasure() {
    this._clearMeasure()
    this._createMoveCursor()
    this._createMoveLabel()
    this._createPolygonGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制线段
   */
  _stopMeasure() {
    this._removeMoveCursor()
    this._mouseAction.stop()
    if (this._polygonDrawActionListener) this._mouseAction.unbindListener(this._polygonDrawActionListener)
  }

  /**
   * 清除绘制
   */
  _clearMeasure() {
    this._positions = []
    this.stopMeasure()
    this._removeDrawedGraphic()
  }

  //订阅鼠标事件
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
  }

  /**
   * 鼠标移动事件
   * @param {Cesium.Cartesian3} position
   */
  _mouseMoveAction(position) {
    if (this._positions.length) this._positions.pop()
    this._positions.push(position)

    this._updateCursorMoveLabel(position)
    this._calculatPolygonArea()
  }

  /**
   * 鼠标右键事件
   * @param {Cesium.Cartesian3} position
   */
  _rightClickAction(position) {
    this._positions.pop()
    this._positions.push(position)
    this._stopMeasure()
    this._onDrawStop.event.raiseEvent(this._positions)
  }

  /**
   * 创建绘制的多边形
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
   * 跟新鼠标移动距离
   * @param {Cesium.Cartesian3} position
   */
  _updateCursorMoveLabel(position) {
    this._movePointGraphic.position = position
  }

  /**
   * 计算多边形的面积
   */
  _calculatPolygonArea() {
    let length = this._positions.length
    let endPoint = this._positions.slice(-1)[0]

    if (length < 3) {
      this._cursorMoveLabel.position = endPoint
    }

    let positions = this._positions
    let polyCenter = Cesium.BoundingSphere.fromPoints(positions).center
    this._cursorMoveLabel.position = polyCenter

    let area = UtilsManager.calculatPolygonArea(positions)
    area = this._optimizaUnit(area)
    this._cursorMoveLabel.text = area
  }

  /**
   * 优化面积单位
   * @param {Number} area
   */
  _optimizaUnit(area) {
    let distanceDesc = area > 1000000 ? `${(area / 1000000).toFixed(2)}平方公里` : `${area.toFixed(2)}平方米`
    return distanceDesc
  }

  /**
   * 创建鼠标移动光标点
   */
  _createMoveCursor() {
    this._movePointGraphic = new PointGraphic(new PointStyle({ pixelSize: 5 }))
    this._featureLayer.add(this._movePointGraphic)
  }

  /**
   * 创建绘制多边形面积标签
   */
  _createMoveLabel() {
    this._cursorMoveLabel = new LabelGraphic(
      new LabelStyle({ text: '点击开始测量', pixelOffset: new Cesium.Cartesian2(15, 15) })
    )
    this._featureLayer.add(this._cursorMoveLabel)
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
   * 移除绘制的要素
   */
  _removeDrawedGraphic() {
    if (Cesium.defined(this._polygonGraphic)) {
      this._featureLayer.remove(this._polygonGraphic)
      this._polygonGraphic = undefined
    }

    if (Cesium.defined(this._cursorMoveLabel)) {
      this._featureLayer.remove(this._cursorMoveLabel)
      this._cursorMoveLabel = undefined
    }
  }
}
