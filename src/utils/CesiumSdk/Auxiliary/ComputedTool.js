import * as Cesium from 'cesium/Cesium.js'
/**
 * 计算相关工具
 */
export default new (class ComputedTool {
  /**
   * 返回两点之间的测地距离。
   * @param {Cesium.Cartesian3[]} positions 坐标点
   * @returns {Number} 返回两点之间的测地距离。
   */
  computedPointsDistance(positions) {
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
  calculatPolygonArea(positions) {
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
  getLengthByCartesian(point1, point2) {
    const { Ellipsoid, EllipsoidGeodesic } = Cesium
    const pickedPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(point1)
    const lastPointCartographic = Ellipsoid.WGS84.cartesianToCartographic(point2)

    const geodesic = new EllipsoidGeodesic(pickedPointCartographic, lastPointCartographic)
    return geodesic.surfaceDistance
  }
})()
