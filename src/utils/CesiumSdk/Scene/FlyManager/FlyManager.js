import FlyRoute from './FlyRoute'
import PlayHelper from './PlayHelper'

/**
 * 飞行管理器
 */
class FlyManager {
  /**
   * 构造函数
   * @param {Space} space 飞行管理器所属的地球空间
   */
  constructor(viewer) {
    this._viewer = viewer
    this._routes = []
    this._activeRoute = undefined
    this._playHelper = undefined
  }

  /**
   * 添加路线
   * @param {FlyRoute} route 需要添加的飞行路线
   */
  add(route) {
    if (route instanceof FlyRoute && !this.contain(route)) this._routes.push(route)
  }

  /**
   * 移除路线
   * @param {FlyRoute} route 需要移除的路线
   */
  remove(route) {
    let index = this._routes.findIndex(r => r.id == route.id)
    if (index !== -1) {
      let r = this._routes.splice(index, 1)
      if (this.activeRoute && r.id == this.activeRoute.id) {
        this.activeRoute = undefined
      }
    }
  }

  /**
   * 移除所有飞行路线
   */
  removeAll() {
    this._routes = []
    this.activeRoute = undefined
  }

  /**
   * 判断飞行管理器中是否已经包含该飞行路线
   * @param {FlyRoute} route 需要判断的飞行路线
   * @return {Boolean} 返回true表示已包含，返回false表示未包含
   */
  contain(route) {
    let index = this._routes.findIndex(r => r.id == route.id)
    return index !== -1
  }

  /**
   * 通过路线id获取路线
   * @param {String} routeId 路线id
   * @return {FlyRoute|undefined} 返回获取到的飞行路线，若未找到则返回undefined
   */
  getById(routeId) {
    let index = this._routes.findIndex(r => r.id == routeId)
    return this._routes[index]
  }

  /**
   * 开始播放
   * @param {Number} [stepIndex=0] 开始播放的站点的索引号，默认值为0，即默认从第一个站点开始播放
   */
  play(stepIndex = 0) {
    if (this._playHelper) this._playHelper.play(stepIndex)
  }

  /**
   * 停止播放
   */
  stop() {
    if (this._playHelper) this._playHelper.stop()
  }

  /**
   * 暂停播放
   */
  pause() {
    if (this._playHelper) this._playHelper.pause()
  }

  /**
   * 继续播放
   */
  continue() {
    if (this._playHelper) this._playHelper.continue()
  }
}

Object.defineProperties(FlyManager.prototype, {
  /**
   * 获取飞行路线管理器中路线的数量
   * @type {Number}
   * @memberof FlyManager.prototype
   * @readonly
   */
  count: {
    get: function() {
      return this._routes.length
    }
  },

  /**
   * 获取或设置飞行管理器中当前的活动路线。
   * 播放、停止、暂停、继续等方法只会作用在当前的活动路线上。
   * 若未设置当前活动路线，则播放、停止、暂停、继续等方法将会失效。
   * @type {FlyRoute|undefined}
   * @memberof FlyManager.prototype
   */
  activeRoute: {
    get: function() {
      return this._activeRoute
    },
    set: function(value) {
      if (value != this._activeRoute) {
        this._activeRoute && (this._activeRoute._isActive = false)
        this.stop()
        if (value) {
          this.add(value)
          this._playHelper = new PlayHelper(value, this._viewer.clock, this._viewer.camera)
        } else {
          this._playHelper = undefined
        }
        this._activeRoute = value
        this._activeRoute._isActive = true
      }
    }
  }
})

export default FlyManager
