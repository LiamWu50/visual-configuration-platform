import { v4 as uuid } from 'uuid'
import * as Cesium from 'cesium/Cesium.js'

export default class Graphics {
  constructor(id, name) {
    this._id = id ? id : uuid()
    this._entity = new Cesium.Entity({ id: this._id })
    /**
     * 要素名称
     * @private
     * @type {String|undefined}
     */
    this._name = name
    /**
     * 要素属性集
     * @private
     * @type {Object}
     */
    this._properties = undefined
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get properties() {
    return this._properties
  }

  set properties(value) {
    this._properties = value
  }

  get show() {
    return this._entity.show
  }

  set show(value) {
    if (value != this._entity.show) this._entity.show = value
  }

  // get position() {
  //   return this._entity.position
  // }

  // set position(value) {
  //   this._entity.position = value
  // }
}
