import CustomEvent from '../../Auxiliary/CustomEvent'
export default class FeatureLayerCollection {
  constructor(viewer) {
    this._viewer = viewer
    this._featureLayers = []
    this._layerAddedEvent = new CustomEvent()
    this._layerRemovedEvent = new CustomEvent()
  }

  /**
   * 添加要素图层
   * @param {FeatureLayer} featureLayer 需要添加的要素图层对象
   */
  add(featureLayer) {
    if (this.contain(featureLayer)) throw new Error('图层已存在，请不要重复添加')
    if (this.getById(featureLayer.id)) throw new Error('图层id已存在')

    this._viewer.dataSources.add(featureLayer._customDataSource)

    this._featureLayers.push(featureLayer)
    this._layerAddedEvent.event.raiseEvent(featureLayer)
  }

  /**
   * 移除要素图层
   * @param {FeatureLayer} featureLayer 需要移除的要素图层对象
   */
  remove(featureLayer) {
    this._viewer.dataSources.remove(featureLayer._customDataSource, true)

    const index = this._featureLayers.indexOf(featureLayer)
    if (index !== -1) {
      this._featureLayers.splice(index, 1)
      this._layerRemovedEvent.event.raiseEvent(featureLayer)
    }
  }

  /**
   * 移除所有要素图层
   */
  removeAll() {
    this._featureLayers.forEach(layer => {
      this.remove(layer)
    })
  }

  /**
   * 通过要素图层id获取要素图层
   * @param {String} id 图层id
   * @return {FeatureLayer|undefined} 返回获取到的要素图层，若没有获取到则返回undefined
   */
  getById(id) {
    return this._featureLayers.find(fl => fl.id === id)
  }

  /**
   * 通过要素图层name获取要素图层
   * @param {String} name 图层name
   * @return {FeatureLayer|undefined} 返回获取到的要素图层，若没有获取到则返回undefined
   */
  getByName(name) {
    return this._featureLayers.find(fl => fl.name === name)
  }

  /**
   * 判断集合中是否存在指定的图层对象
   * @param {FeatureLayer} featureLayer 图层对象
   * @return {Boolean} 存在返回true，不存在返回false
   */
  contain(featureLayer) {
    const index = this._featureLayers.indexOf(featureLayer)
    return index === -1 ? false : true
  }
}
