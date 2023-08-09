import MeasureHelper from './MeasureHelper'
import TerrainExcavat from './TerrainExcavat'
/**
 * 空间分析工具
 */
export default class SpatialAnalysis {
  constructor(mapViewer) {
    this._measureHelper = new MeasureHelper(mapViewer)
    this._terrainExcavat = new TerrainExcavat(mapViewer)
  }

  get measureHelper() {
    return this._measureHelper
  }

  get terrainExcavat() {
    return this._terrainExcavat
  }
}
