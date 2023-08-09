import * as Cesium from 'cesium/Cesium.js'
import CustomEvent from '../../Auxiliary/CustomEvent'

export default class FeatureLayer {
  constructor(id, name) {
    this._features = []
    this._id = id ? id : Cesium.createGuid()
    this._name = name
    this._customDataSource = new Cesium.CustomDataSource(name)
    this._customDataSource.id = this._id
    this._addedEvent = new CustomEvent()
    this._removedEvent = new CustomEvent()
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  /**
   * 添加要素
   * @param {Feature} feature 需要添加到图层中的要素对象
   */
  add(feature) {
    this._features.push(feature)
    this._customDataSource.entities.add(feature.entity)
    this._addedEvent.event.raiseEvent(feature)
  }

  /**
   * 删除要素
   * @param {Feature} feature 需要从图层中删除的要素对象
   */
  remove(feature) {
    let index = this._features.indexOf(feature)
    if (index !== -1) {
      this._features.splice(index, 1)
      this._customDataSource.entities.remove(feature.entity)
      this._removedEvent.event.raiseEvent(feature)
    }
  }

  /**
   * 删除图层中的所有要素
   */
  removeAll() {
    this._customDataSource.entities.removeAll()
    let removedEvent = this._removedEvent
    this._features.map(feature => removedEvent.event.raiseEvent(feature))
    this._features = []
  }

  /**
   * 通过要素id来获取要素
   * @param {String} featureId 要素id
   * @return {Feature|undefined} 返回获取到的要素对象，如果没有获取到则返回undefined
   */
  getById(featureId) {
    return this._features.find(f => f.id == featureId)
  }

  /**
   * 判断图层中是否含有改要素
   * @param {Feature} feature 需要判断的要素对象
   * @return {Boolean} 包含返回true，否则返回false
   */
  contain(feature) {
    return this._features.indexOf(feature) !== -1
  }
}
