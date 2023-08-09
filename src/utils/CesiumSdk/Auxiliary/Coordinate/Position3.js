class Position3 {
  /**
   * 三维坐标点对象
   * @param {Number} longitude 纬度，十进制，单位度
   * @param {Number} latitude 经度，十进制，单位度
   * @param {Number} altitude 高程，绝对高程，单位米
   * @constructor
   */
  constructor(longitude = 0, latitude = 0, altitude = 0) {
    /**
     * 经度，十进制，单位度
     * @type {Number}
     */
    this.longitude = longitude
    /**
     * 纬度，十进制，单位度
     * @type {Number}
     */
    this.latitude = latitude
    /**
     * 高程，绝对高程，单位米
     * @type {Number}
     */
    this.altitude = altitude
  }

  /**
   * 判断两个坐标是否相同
   * @static
   * @param {Position3} left 参与比较的前一个坐标点
   * @param {Position3} right 参与比较的另一个坐标点
   * @return {Boolean} 相同返回true，不相同返回false
   */
  static equals(left, right) {
    return left.longitude === right.longitude && left.latitude === right.latitude && left.altitude === right.altitude
  }

  /**
   * 将三维坐标转换为字符串
   * @example 转换结果如："126.3454,34.567,300"
   * @returns {String}
   */
  toString() {
    return `${this.longitude},${this.latitude},${this.altitude}`
  }

  /**
   * 创建副本
   * @return {Position3} 副本三维坐标点对象
   */
  clone() {
    let self = this
    return new Position3(self.longitude, self.latitude, self.altitude)
  }
}

export default Position3
