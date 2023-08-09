import * as Cesium from 'cesium/Cesium.js'

/**
 * 挖掘帮助工具
 */
export default class ExcavatHelper {
  /**
   *
   * @param {Cesium.viewer} viewer
   * @param {Object} options
   * @param {Number} [options.height] 挖掘深度
   * @param {Image} [options.bottomMaterial] 底部材质图片
   * @param {Image} [options.wallMaterial] 井面材质图片
   */
  constructor(viewer, option = {}) {
    this._viewer = viewer
    this._points = [] //挖掘面点数组
    this._bottomMaterial = Cesium.defaultValue(option.bottomMaterial, require('./image/excavate_bottom.jpg')) //底部材质图片
    this._wallMaterial = Cesium.defaultValue(option.wallMaterial, require('./image/excavate_bottom.jpg')) //井面材质图片
    this._height = Cesium.defaultValue(option.height, 50) //挖掘深度
    this._lerpInterval = Cesium.defaultValue(option.lerpInterval, 50) //每两点之间插值个数
    this._excavateMinHeight = 9999 //最低挖掘海拔值
    this._bottomSurface = undefined
    this._wallGraphic = undefined

    if (this._viewer.scene.highDynamicRangeSupported) {
      this._viewer.scene.highDynamicRange = true
      this._hasChangeHighDynamicRange = true
    }
  }

  get startClip() {
    return this._startClip
  }

  get clear() {
    return this._clear
  }

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
    this._updateExcavateDepth(value)
  }

  /**
   * 开始裁剪
   * @param {Cesium.Cartesian3[]} points
   */
  _startClip(points) {
    if (points.length < 3) throw new Error('坐标位置不能少于三个')
    this._points = points
    //创建裁剪面
    this._clippingTerrain(points)
    //获取最低点高度
    this._getMinPointHeight(points)
    //创建井底部
    this._createBottomSurface(points)
    //创建井壁
    this._createShaftWall(points)
  }

  /**
   * 裁剪地形
   * @param {Cesium.Cartesian3[]} points
   */
  _clippingTerrain(points) {
    //判断点的顺序是顺时针还是逆时针
    let isRight = this._judgeDirection(points),
      clippingPlanes = [],
      length = points.length

    for (let i = 0; i < length; ++i) {
      const nextIndex = (i + 1) % length

      let up = Cesium.Cartesian3.normalize(points[i], new Cesium.Cartesian3())
      let right = !isRight
        ? Cesium.Cartesian3.subtract(points[i], points[nextIndex], new Cesium.Cartesian3())
        : Cesium.Cartesian3.subtract(points[nextIndex], points[i], new Cesium.Cartesian3())
      right = Cesium.Cartesian3.normalize(right, right)

      let normal = Cesium.Cartesian3.cross(right, up, new Cesium.Cartesian3())
      normal = Cesium.Cartesian3.normalize(normal, normal)

      clippingPlanes.push(new Cesium.ClippingPlane(normal, 0))
    }

    //创建地形裁剪
    this._viewer.scene.globe.clippingPlanes = new Cesium.ClippingPlaneCollection({
      planes: clippingPlanes,
      edgeWidth: 1,
      edgeColor: Cesium.Color.WHITE,
      enabled: true
    })
  }

  /**
   * 获取最低点的高度
   */
  _getMinPointHeight(points) {
    points.forEach(point => {
      const Cartographic = Cesium.Cartographic.fromCartesian(point)
      if (Cartographic.height < this._excavateMinHeight) {
        this._excavateMinHeight = Cartographic.height
      }
    })

    //找出最低点的高度
    this._targetHeight = this._excavateMinHeight - this._height
  }

  /**
   * 判断点的顺序是顺时针还是逆时针
   * @param {Cesium.Cartesian3[]} points
   */
  _judgeDirection(points) {
    let lonlat1 = Cesium.Cartographic.fromCartesian(points[0])
    let lonlat2 = Cesium.Cartographic.fromCartesian(points[1])
    let lonlat3 = Cesium.Cartographic.fromCartesian(points[2])
    let x1 = lonlat1.longitude,
      y1 = lonlat1.latitude,
      x2 = lonlat2.longitude,
      y2 = lonlat2.latitude,
      x3 = lonlat3.longitude,
      y3 = lonlat3.latitude,
      dirRes = (x2 - x1) * (y3 - y2) - (y2 - y1) * (x3 - x2)

    let isR = dirRes > 0
    return isR
  }

  //创建井壁
  _createShaftWall(points) {
    let lerpInterval = this._lerpInterval,
      len = points.length,
      lerpPositions = []

    for (let i = 0; i < len; i++) {
      let nextIndex = (i + 1) % len
      let currRad = Cesium.Cartographic.fromCartesian(points[i])
      let nextRad = Cesium.Cartographic.fromCartesian(points[nextIndex])
      let position1 = [currRad.longitude, currRad.latitude]
      let position2 = [nextRad.longitude, nextRad.latitude]

      for (let j = 0; j < lerpInterval; j++) {
        let longitude = Cesium.Math.lerp(position1[0], position2[0], j / lerpInterval),
          latitude = Cesium.Math.lerp(position1[1], position2[1], j / lerpInterval)
        lerpPositions.push(new Cesium.Cartographic(longitude, latitude))
      }
    }

    //增加开始点构造闭合环
    lerpPositions.push(lerpPositions[0].clone())
    this._createWellWall(lerpPositions)
  }

  /**
   * 创建墙体
   * @param {Cesium.Cartesian3[]} lerpPositions
   */
  async _createWellWall(lerpPositions) {
    let wellPositions = [],
      maximumHeights = [],
      minimumHeights = []

    //根据采样地形高度更新坐标
    await Cesium.sampleTerrainMostDetailed(this._viewer.terrainProvider, lerpPositions)

    lerpPositions.forEach(lerpPosition => {
      const { longitude, latitude, height } = lerpPosition

      wellPositions.push(Cesium.Cartesian3.fromRadians(longitude, latitude, height))
      maximumHeights.push(height)
      minimumHeights.push(this._targetHeight)
    })

    const material = new Cesium.ImageMaterialProperty({
      image: this._wallMaterial,
      repeat: new Cesium.Cartesian2(5, 5)
    })

    this._wallGraphic = new Cesium.Entity({
      wall: new Cesium.WallGraphics({
        positions: wellPositions,
        maximumHeights,
        minimumHeights,
        material
      })
    })
    this._viewer.entities.add(this._wallGraphic)
  }

  /**
   * 创建井底
   * @param {Cesium.Cartesian3[]} points
   */
  _createBottomSurface(points) {
    const material = new Cesium.ImageMaterialProperty({
      image: this._bottomMaterial,
      repeat: new Cesium.Cartesian2(5, 5)
    })

    this._bottomSurface = new Cesium.Entity({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(points),
        height: this._targetHeight,
        material
      }
    })

    this._viewer.entities.add(this._bottomSurface)
  }

  /**
   * 更新挖掘深度
   * @param {Number} depth
   */
  _updateExcavateDepth(depth) {
    if (this._bottomSurface) {
      this._viewer.entities.remove(this._bottomSurface)
    }
    if (this._wallGraphic) {
      this._viewer.entities.remove(this._wallGraphic)
    }
    this._height = depth
    this._getMinPointHeight(this._points)
    //创建井底部
    this._createBottomSurface(this._points)
    //创建井壁
    this._createShaftWall(this._points)
  }

  /**
   * 清除挖掘体
   */
  _clear() {
    if (this._hasChangeHighDynamicRange) {
      this._viewer.scene.highDynamicRange = false
      this._hasChangeHighDynamicRange = false
    }

    if (this._viewer.scene.globe.clippingPlanes) {
      this._viewer.scene.globe.clippingPlanes.enabled = false
      this._viewer.scene.globe.clippingPlanes.removeAll()
    }

    if (this._bottomSurface) {
      this._viewer.entities.remove(this._bottomSurface)
      this._bottomSurface = undefined
    }

    if (this._wallGraphic) {
      this._viewer.entities.remove(this._wallGraphic)
      this._wallGraphic = undefined
    }
  }
}
