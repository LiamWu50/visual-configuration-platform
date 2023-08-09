import * as Cesium from 'cesium/Cesium.js'
/**
 * 三维地图常用工具
 */
export default class UtilsManager {
  constructor() {
    this._handler = null
    this._pick = null
  }

  /**
   * 绑定鼠标事件
   * @param {Function} callback
   * @param {MouseEventType} type LEFT_CLICK、LEFT_DOUBLE_CLICK、MOUSE_MOVE
   * @param {This} self
   */
  static bindMouseEvent(callback, type) {
    this._setHandler()
    if (!this._handler) return
    this._handler.setInputAction(e => {
      callback(e)
    }, type)
  }

  /**
   * 移出鼠标事件
   * @param {MouseEventType} type
   */
  static removeMouseEvent(type) {
    if (!this._handler) return
    this._handler.removeInputAction(type)
  }

  /**
   * 创建鼠标事件控制器
   */
  _setHandler(scene) {
    if (!this._handler) this._handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
  }

  /**
   * 获取鼠标点击的数据对象
   * @param {Object} obj
   */
  static pickedObject(obj, scene) {
    let pickObject = scene.pick(obj.position)
    if (pickObject) {
      return pickObject
    }
  }

  /**
   * 世界坐标转经纬度坐标
   * @param {position} cartesian3
   */
  static lonlatFromCartesian3(cartesian3, scene) {
    if (!scene) return

    let ellipsoid = scene.globe.ellipsoid
    let cartographic = ellipsoid.cartesianToCartographic(cartesian3)
    let latitude = Cesium.Math.toDegrees(cartographic.latitude)
    let longitude = Cesium.Math.toDegrees(cartographic.longitude)
    let altitude = cartographic.height
    let lonlat = { latitude, longitude, altitude }
    return lonlat
  }

  /**
   * 经纬度坐标转世界坐标
   * @param {positons} lonlat
   */
  static cartesian3FromLonlat(lonlat) {
    let cartesian3 = Cesium.Cartesian3.fromDegrees(...lonlat)
    return cartesian3
  }

  /**
   * 数组坐标转lonlat
   * @param {Array} arr
   */
  static lonlatFromArr(longitude, latitude, altitude) {
    return {
      longitude,
      latitude,
      altitude
    }
  }

  /**
   * 返回两点之间的测地距离。
   * @param {Cesium.Cartesian3[]} positions 坐标点
   * @returns {Number} 返回两点之间的测地距离。
   */
  static computedPointsDistance(positions) {
    if (positions.length < 2) {
      return 0
    }
    const { Ellipsoid, EllipsoidGeodesic } = Cesium
    const pickedPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(positions[0])
    const lastPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(positions.slice(-1)[0])

    const geodesic = new EllipsoidGeodesic(pickedPointCartographic, lastPointCartographic)
    return geodesic.surfaceDistance
  }

  /**
   *  计算多边形的面积
   * @param {Cesium.Cartesian3[]} positions
   * @return {Number} 返回传入多边形的面积
   */
  static calculatPolygonArea(positions) {
    if (positions.length < 3) {
      return 0
    }
    const {
      Cartesian3,
      EllipsoidTangentPlane,
      Ellipsoid,
      Math: CesiumMath,
      PolygonGeometryLibrary,
      PolygonHierarchy,
      VertexFormat
    } = Cesium
    const perPositionHeight = true
    // 获取组成多边形的三角形。
    const tangentPlane = EllipsoidTangentPlane.fromPoints(positions, Ellipsoid.WGS84)
    const polygons = PolygonGeometryLibrary.polygonsFromHierarchy(
      new PolygonHierarchy(positions),
      tangentPlane.projectPointsOntoPlane.bind(tangentPlane),
      !perPositionHeight,
      Ellipsoid.WGS84
    )

    const geom = PolygonGeometryLibrary.createGeometryFromPositions(
      Ellipsoid.WGS84,
      polygons.polygons[0],
      CesiumMath.RADIANS_PER_DEGREE,
      perPositionHeight,
      VertexFormat.POSITION_ONLY
    )

    if (geom.indices.length % 3 !== 0 || geom.attributes.position.values.length % 3 !== 0) {
      // 不是三角形，无法计算。
      return 0
    }
    const coords = []
    for (let i = 0; i < geom.attributes.position.values.length; i += 3) {
      coords.push(
        new Cartesian3(
          geom.attributes.position.values[i],
          geom.attributes.position.values[i + 1],
          geom.attributes.position.values[i + 2]
        )
      )
    }
    let area = 0
    for (let i = 0; i < geom.indices.length; i += 3) {
      const ind1 = geom.indices[i]
      const ind2 = geom.indices[i + 1]
      const ind3 = geom.indices[i + 2]

      const a = Cartesian3.distance(coords[ind1], coords[ind2])
      const b = Cartesian3.distance(coords[ind2], coords[ind3])
      const c = Cartesian3.distance(coords[ind3], coords[ind1])

      // 海伦公式
      const s = (a + b + c) / 2.0
      area += Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    return area
  }

  /**
   * 计算两点距离通过笛卡尔坐标距离
   * @param {Cesium.Cartesian3} point1
   * @param {Cesium.Cartesian3} point2
   */
  static getLengthByCartesian(point1, point2) {
    const { Ellipsoid, EllipsoidGeodesic } = Cesium
    const pickedPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(point1)
    const lastPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(point2)

    const geodesic = new EllipsoidGeodesic(pickedPointCartographic, lastPointCartographic)
    return geodesic.surfaceDistance
  }

  /**
   * 获取两点水平方向
   * @param {Cesium.Cartesian3} startpos
   * @param {Cesium.Cartesian3} endpos
   */
  static getHeading(startpos, endpos) {
    let localToWorld_Matrix = Cesium.Transforms.eastNorthUpToFixedFrame(startpos)
    let worldToLocal_Matrix = Cesium.Matrix4.inverse(localToWorld_Matrix, new Cesium.Matrix4())
    let localPosition_A = Cesium.Matrix4.multiplyByPoint(worldToLocal_Matrix, startpos, new Cesium.Cartesian3())
    let localPosition_B = Cesium.Matrix4.multiplyByPoint(worldToLocal_Matrix, endpos, new Cesium.Cartesian3())
    let angle = Math.atan2(localPosition_B.x - localPosition_A.x, localPosition_B.y - localPosition_A.y)
    return angle
  }

  /**
   * 获取两点俯仰角
   * @param {Cesium.Cartesian3} startpos
   * @param {Cesium.Cartesian3} endpos
   */
  static getPitch(startpos, endpos) {
    let localToWorld_Matrix = Cesium.Transforms.eastNorthUpToFixedFrame(startpos)
    let worldToLocal_Matrix = Cesium.Matrix4.inverse(localToWorld_Matrix, new Cesium.Matrix4())
    let localPosition_A = Cesium.Matrix4.multiplyByPoint(worldToLocal_Matrix, startpos, new Cesium.Cartesian3())
    let localPosition_B = Cesium.Matrix4.multiplyByPoint(worldToLocal_Matrix, endpos, new Cesium.Cartesian3())
    let angle = Math.atan2(localPosition_B.z - localPosition_A.z, localPosition_B.x - localPosition_A.x)
    return angle
  }
}
