import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../Auxiliary/CustomEvent'
import PointStyle from '../Style/PointStyle'
import PointGraphic from '../Entity/PointGraphic'
import BoxGraphic from '../Entity/BoxGraphic'
import BoxStyle from '../Style/BoxStyle'
import MouseAction from '../DrawAction/MouseAction'

/**
 * 盒子绘制工具
 */
export default class BoxDrawer {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._onDrawStop = new CustomEvent()
    this._mouseAction = new MouseAction(this._viewer)
    this._boxDrawActionListener = null
    this._positions = []
    this._length = 0
    this._width = 0
    this._height = 1
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
   * 开始绘制盒子
   */
  _startDraw() {
    this._createMoveCursor()
    this._createBoxGraphic()
    this._listeneMouseEvent()
    this._mouseAction.start()
  }

  /**
   * 停止绘制盒子
   */
  _stopDraw() {
    this._removeMoveCursor()
    this._onDrawStop._event.raiseEvent(this._activePoints)
    this._mouseAction.stop()
    this._mouseAction.unbindListener(this._boxDrawActionListener)
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._boxDrawActionListener = {
      onMouseMove: this._mouseMoveAction.bind(this),
      onLeftClick: this._leftClickAction.bind(this),
      onRightClick: this._rightClickAction.bind(this)
    }
    this._mouseAction.bindListener(this._boxDrawActionListener)
  }

  /**
   * 鼠标左击事件
   * @param {Cesium.Cartesian3} position
   */
  _leftClickAction(position) {
    const lastPosition = this._positions.pop()
    this._positions.push(position, lastPosition)

    if (this._positions.length === 2) {
      this._boxGraphic.position = this._positions[0]
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
      this._updateBoxWidthWithLength()
    } else {
      this._movePointGraphic.position = position
      this._updateBoxHeight()
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
    this._removeBox()
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
   * 创建盒子
   */
  _createBoxGraphic() {
    if (Cesium.defined(this._boxGraphic)) return

    let property = new Cesium.CallbackProperty(() => {
      return Cesium.Cartesian3(this._length, this._width, this._height)
    }, false)

    const boxStyle = new BoxStyle({ dimensions: property })
    this._boxGraphic = new BoxGraphic(boxStyle)

    this._featureLayer.add(this._boxGraphic)
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
   * 移除绘制的盒子
   */
  _removeBox() {
    if (Cesium.defined(this._boxGraphic)) {
      this._featureLayer.remove(this._boxGraphic)
      this._boxGraphic = undefined
    }
  }

  /**
   * 更新盒子的高度
   */
  _updateBoxHeight() {
    if (this._positions !== 3) return

    const height = Cesium.Cartesian3.distance(this._positions[1], this._positions[2])
    this._height = height
  }

  /**
   * 更新盒子长度和宽度
   */
  _updateBoxWidthWithLength() {
    const positions = this._positions,
      p1 = new Cesium.Cartesian3(positions[0].x, positions[0].y),
      p2 = new Cesium.Cartesian3(positions[1].x, positions[0].y),
      p3 = new Cesium.Cartesian3(positions[0].x, positions[1].y)

    this._width = Cesium.Cartesian3.distance(p1, p2)
    this._length = Cesium.Cartesian3.distance(p1, p3)
  }
}
