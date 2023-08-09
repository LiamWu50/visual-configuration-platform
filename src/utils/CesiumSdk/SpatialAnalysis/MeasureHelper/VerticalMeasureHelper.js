import * as Cesium from 'cesium/Cesium.js'
import PolylineGraphic from '../../Entity/PolylineGraphic'
import PolylineStyle from '../../Style/PolylineStyle'
import PointGraphic from '../../Entity/PointGraphic'
import PointStyle from '../../Style/PointStyle'
import LabelGraphic from '../../Entity/LabelGraphic'
import LabelStyle from '../../Style/LabelStyle'

/**
 * 垂直高度测量
 */
export default class VerticalMeasureHelper {
  constructor(mapViewer) {
    this._viewer = mapViewer.viewer
    this._handler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas)
    this._positions = []
    this._polylineDrawActionListener = null
    this._oneMeasureIsEnd = false
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
    this._createPolylineGraphic()
    this._createResultLabel()
    this._createEndpoint()
    this._listeneMouseEvent()
  }

  /**
   * 停止绘制线段
   */
  _unbindListener() {
    this._handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    this._handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
    this._handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  }

  /**
   * 关闭测量
   */
  _clearMeasure() {
    this._unbindListener()
    this._initParams()
    this._clearGraphic()
  }

  /**
   * 订阅鼠标事件
   */
  _listeneMouseEvent() {
    this._handler.setInputAction(this._leftClickAction.bind(this), Cesium.ScreenSpaceEventType.LEFT_CLICK)
    this._handler.setInputAction(this._mouseMoveAction.bind(this), Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    this._handler.setInputAction(this._rightClickAction.bind(this), Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  }

  /**
   * 初始化参数
   */
  _initParams() {
    this._positions = []
    this._oneMeasureIsEnd = false
  }

  /**
   * 鼠标左击事件
   * @param {Position} event
   */
  _leftClickAction(event) {
    this._oneMeasureIsEnd && this._initParams()
    let cartesian3 = this._viewer.scene.pickPosition(event.position)
    if (!Cesium.defined(cartesian3)) return

    if (this._positions.length === 0) {
      this._startPointGraphic.position = cartesian3
    } else if (this._positions.length === 1) {
      this._oneMeasureIsEnd = true
    }
    this._positions.push(cartesian3.clone())
  }

  /**
   * 鼠标移动事件
   * @param {Position} event
   */
  _mouseMoveAction(event) {
    if (this._positions.length !== 1) return
    let cartesian3 = this._viewer.scene.pickPosition(event.endPosition)
    if (!Cesium.defined(cartesian3)) return
    let clc = this._getVerticalCartesian3(this._positions[0], cartesian3)
    this._endPointGraphic.position = clc.endCartesian3

    let linePositions = [this._positions[0], clc.endCartesian3]
    this._updatePoylinePositions(linePositions)
    this._updateResultLabel(clc)
  }

  /**
   * 鼠标右键事件
   * @param {Position} event
   */
  _rightClickAction() {
    this._positions = []
    this._oneMeasureIsEnd = true
  }

  /**
   * 清除绘制的图斑
   */
  _clearGraphic() {
    if (this._startPointGraphic) {
      this._viewer.entities.remove(this._startPointGraphic.entity)
      this._startPointGraphic = null
    }
    if (this._endPointGraphic) {
      this._viewer.entities.remove(this._endPointGraphic)
      this._endPointGraphic = null
    }
    if (this._polylineGraphic) {
      this._viewer.entities.remove(this._polylineGraphic)
      this._polylineGraphic = null
    }
    if (this._heightLabelGraphic) {
      this._viewer.entities.remove(this._heightLabelGraphic)
      this._heightLabelGraphic = null
    }
  }

  /**
   * 跟新绘制的管线
   * @param {Cesium.Cartesian3[]} positions
   */
  _updatePoylinePositions(positions) {
    let polylineDynamicPositions = new Cesium.CallbackProperty(function() {
      if (positions.length > 1) {
        return positions
      } else {
        return null
      }
    }, false)
    this._polylineGraphic.positions = polylineDynamicPositions
  }

  /**
   * 创建测量结果标签
   */
  _createResultLabel() {
    if (this._heightLabelGraphic) return
    this._heightLabelGraphic = new LabelGraphic(
      new LabelStyle({
        pixelOffset: new Cesium.Cartesian2(10, -30),
        heightReference: Cesium.HeightReference.NONE
      })
    )
    this._featureLayer.add(this._heightLabelGraphic)

    this._cursorMoveLabel = new LabelGraphic(
      new LabelStyle({ text: '点击开始测量', pixelOffset: new Cesium.Cartesian2(10, -30) })
    )
    this._featureLayer.add(this._cursorMoveLabel)
  }

  /**
   * 更新高度标签的位置
   * @param {Object} result
   */
  _updateResultLabel(result) {
    let { centerCartesian3, height } = result
    this._heightLabelGraphic.position = centerCartesian3
    this._heightLabelGraphic.text = height.toFixed(2) + '米'
  }

  /**
   * 创建垂直线
   */
  _createPolylineGraphic() {
    if (this._polylineGraphic) return
    this._polylineGraphic = new PolylineGraphic(new PolylineStyle({ clampToGround: false }))
    this._featureLayer.add(this._polylineGraphic)
  }

  /**
   * 创建线段的两个端点
   */
  _createEndpoint() {
    this._startPointGraphic = new PointGraphic(new PointStyle())

    this._endPointGraphic = new PointGraphic(new PointStyle())

    this._featureLayer.add(this._startPointGraphic)
    this._featureLayer.add(this._endPointGraphic)
  }

  _getVerticalCartesian3(baseCart, endCart) {
    let baseGrap = Cesium.Cartographic.fromCartesian(baseCart)
    let endGrap = Cesium.Cartographic.fromCartesian(endCart)
    let height = endGrap.height - baseGrap.height
    let lng = Cesium.Math.toDegrees(baseGrap.longitude)
    let lat = Cesium.Math.toDegrees(baseGrap.latitude)
    let endCartesian3 = baseCart
    let centerCartesian3 = baseCart

    if (height > 0) {
      endCartesian3 = Cesium.Cartesian3.fromDegrees(lng, lat, endGrap.height)
      centerCartesian3 = Cesium.Cartesian3.fromDegrees(lng, lat, (baseGrap.height + endGrap.height) / 2.0)
    } else {
      height = 0
      endCartesian3 = Cesium.Cartesian3.fromDegrees(lng, lat, baseGrap.height)
      centerCartesian3 = Cesium.Cartesian3.fromDegrees(lng, lat, baseGrap.height)
    }
    return {
      endCartesian3: endCartesian3,
      centerCartesian3: centerCartesian3,
      height: height
    }
  }
}
