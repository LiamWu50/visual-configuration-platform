import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../../Auxiliary/CustomEvent'
import PolylineGraphic from '../../Entity/PolylineGraphic'
import PolylineStyle from '../../Style/PolylineStyle'
import PointGraphic from '../../Entity/PointGraphic'
import PointStyle from '../../Style/PointStyle'
import LabelGraphic from '../../Entity/LabelGraphic'
import LabelStyle from '../../Style/LabelStyle'
import MouseAction from '../../DrawAction/MouseAction'
import ComputedTool from '../../Auxiliary/ComputedTool'

/**
 * 距离测量工具
 */
export default class HorizontalMeasureHelper {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._polylineDrawActionListener = null
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
    this._createPolylineGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止测量
   */
  _stopMeasure() {
    this._removeMoveCursor()
    this._mouseAction.stop()
    if (this._polylineDrawActionListener) this._mouseAction.unbindListener(this._polylineDrawActionListener)
  }

  /**
   * 清除测量
   */
  _clearMeasure() {
    this._positions = []
    this._stopMeasure()
    this._removeDrawedGraphic()
  }

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

    this._updateCursorMoveLabel(position)
    this._computeMeasureDistance()
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
   * 计算测量的线段距离
   */
  _computeMeasureDistance() {
    const length = this._positions.length
    if (length < 2) return

    let copyPoints = this._positions
    let distance = ComputedTool.computedPointsDistance(copyPoints)
    let distanceLabel = this._optimizaUnit(distance)
    this._cursorMoveLabel.text = distanceLabel
  }

  /**
   * 跟新鼠标移动距离
   * @param {Cesium.Cartesian3} position
   */
  _updateCursorMoveLabel(position) {
    this._movePointGraphic.position = position
    this._cursorMoveLabel.position = position
  }

  /**
   * 优化距离单位
   * @param {Number} distance
   */
  _optimizaUnit(distance) {
    let distanceDesc = distance > 1000 ? `${(distance / 1000).toFixed(2)}km` : `${distance.toFixed(2)}m`
    return distanceDesc
  }

  /**
   * 创建线段
   */
  _createPolylineGraphic() {
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
   * 创建移动距离标签
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
    if (this._movePointGraphic) {
      this._featureLayer.remove(this._movePointGraphic)
      this._movePointGraphic = undefined
    }
  }

  /**
   * 移除绘制的要素图斑
   */
  _removeDrawedGraphic() {
    if (Cesium.defined(this._polylineGraphic)) {
      this._featureLayer.remove(this._polylineGraphic)
      this._polylineGraphic = undefined
    }

    if (Cesium.defined(this._cursorMoveLabel)) {
      this._featureLayer.remove(this._cursorMoveLabel)
      this._cursorMoveLabel = undefined
    }
  }
}
