import Position3 from '../Coordinate/Position3'

const radiansPreDegree = Math.PI / 180.0
const msPreKmh = 5.0 / 1.8

/**
 * 公共核心数学方法
 */
class CommonMath {
  constructor() {}

  /**
   * 根据A、B两点的经纬度坐标计算A点指向B点的方位角
   * @param {Position3} positionA A点
   * @param {Position3} positionB B点
   * @return {Number} 方位角，单位弧度
   */
  static getDirectionByTwoPosition3s(positionA, positionB) {
    // 公式参考方法：https://blog.csdn.net/luoguopeng/article/details/76322348
    // A点经纬度（j1, w1），B点经纬度（j2, w2），方向角为θ
    // sinθ = cosw2 * sin(j2 - j1) / sqrt(1 - k²)
    // 其中k = sinw1 * sinw2 + cosw1 * cosw2 * cos(j2 - j1)
    // 通过反正弦函数求得θ后，若B点在A点的第一象限，则θ += 360，若B点在A点的三四象限，则θ = 180 - θ
    let deltaJ = positionB.longitude - positionA.longitude
    let deltaW = positionB.latitude - positionA.latitude
    let deltaJR = deltaJ * radiansPreDegree
    let w1R = positionA.latitude * radiansPreDegree
    let w2R = positionB.latitude * radiansPreDegree
    let sinJ = Math.sin(deltaJR)
    let cosJ = Math.cos(deltaJR)
    let sinW1 = Math.sin(w1R)
    let sinW2 = Math.sin(w2R)
    let cosW1 = Math.cos(w1R)
    let cosW2 = Math.cos(w2R)
    let k = sinW1 * sinW2 + cosW1 * cosW2 * cosJ
    let sinSita = (cosW2 * sinJ) / Math.sqrt(1 - k * k)
    let sita = Math.asin(sinSita)
    let quadrant = this.getQuadrant(deltaJ, deltaW)
    if (quadrant == 2) {
      sita = sita + 2 * Math.PI
    } else if (quadrant == 3 || quadrant == 4) {
      sita = Math.PI - sita
    }
    return sita
  }

  /**
   * 判断点的象限
   * @param {Number} x 点的x坐标
   * @param {Number} y 点的y坐标
   * @return {Number} 返回象限序号，第一象限返回1，第二象限返回2，第三象限返回3，第四象限返回4
   */
  static getQuadrant(x, y) {
    if (x > 0 && y >= 0) {
      return 1
    } else if (x <= 0 && y > 0) {
      return 2
    } else if (x < 0 && y <= 0) {
      return 3
    } else if (x >= 0 && y < 0) {
      return 4
    }
  }

  /**
   * 将以Km/h为单位的速度转换成以m/s为单位的速度
   * @param {Number} v 以Km/h为单位的速度
   * @return {Number} 返回以m/s为单位的速度
   */
  static toMPreS(v) {
    return v * msPreKmh
  }
}

export default CommonMath
