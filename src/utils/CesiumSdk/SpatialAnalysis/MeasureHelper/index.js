import HorizontalMeasureHelper from './HorizontalMeasureHelper'
import VerticalMeasureHelper from './VerticalMeasureHelper'
import AreaMeasureHelper from './AreaMeasureHelper'
import MeasureType from './MeasureType'

/**
 * 量算工具
 */
export default class MeasureHelper {
  constructor(mapViewer) {
    this._horizontalMeasure = new HorizontalMeasureHelper(mapViewer)
    this._areaMeasure = new AreaMeasureHelper(mapViewer)
    this._verticalMeasure = new VerticalMeasureHelper(mapViewer)
  }

  get measure() {
    return this._measure
  }

  get clearMeasure() {
    return this._clearMeasure
  }

  /**
   * 关闭量算
   */
  _clearMeasure() {
    this._measure(MeasureType.NONE_MEASURE)
    this._verticalMeasure.closeMeasure()
    this._horizontalMeasure.closeMeasure()
    this._areaMeasure.closeMeasure()
  }

  /**
   * 开始测量
   * @param {MEASURE_TYPE} type
   */
  _measure(type) {
    // 再打开新的量算模式
    if (type == MeasureType.VERTICAL_MEASURE) {
      this._verticalMeasure.startMeasure()
    } else if (type == MeasureType.HORIZONTAL_MEASURE) {
      this._horizontalMeasure.startMeasure()
    } else if (type == MeasureType.AREA_MEASURE) {
      this._areaMeasure.startMeasure()
    }
  }
}
